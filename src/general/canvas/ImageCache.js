/***********************************************************************
 *
 * 　ゲームで使う画像をキャッシュしておくクラス.
 *
***********************************************************************/

class ImageCache
{
    static #imageDict = {}; // Object: 画像をキャッシュする辞書.
    static #aliasDict = {}; // Object: エイリアスを管理する辞書.


    /*-----------------------------------------------------------------+
    *
    * 説明:
    *   画像を追加する.
    *   await で呼び出すことで同期的に画像のロードを行う.
    *   alias 引数に別名を指定することで短縮名での画像取得を可能にする.
    *
    * 引数:
    *   string   imagePath:  画像へのパス.
    *   string   alias:      この画像にアクセスするために使う別名(任意).
    *
    +-----------------------------------------------------------------*/
    static async AddImage(imagePath, alias = '')
    {
        let image = new Image();
        let promise = new Promise(resolve =>
        {
            image.onload = ()=> { resolve(); }
            image.src = imagePath;
        });

        await promise;

        ImageCache.#imageDict[imagePath] = image;
        if (alias != '')
        {
            ImageCache.#aliasDict[alias] = [imagePath];
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明:
    *   画像を読み取る.
    *
    * 引数:
    *   string   imagePathOrAlias:  画像へのパスか画像追加時に付けた別名.
    * 
    * 戻り値:
    *   Image: 取得に成功した場合は Image オブジェクトを返す.
    *   null:  取得に失敗した場合は null を返す.
    *
    +-----------------------------------------------------------------*/
    static GetImage(imagePathOrAlias)
    {
        if (imagePathOrAlias in ImageCache.#aliasDict)
        {
            let key = ImageCache.#aliasDict[imagePathOrAlias];
            return ImageCache.#imageDict[key];
        }
        
        if (imagePathOrAlias in ImageCache.#imageDict)
        {
            return ImageCache.#imageDict[imagePathOrAlias];
        }

        return null;
    }
}