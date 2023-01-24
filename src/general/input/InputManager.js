/***********************************************************************
 *
 * 　入力を管理するクラス.
 *
***********************************************************************/

class InputManager
{
    static #keyState;     // Object<string, number>: キーの状態.
    static #messageQueue; // Array<InputMessage>:    メッセージのキュー.


    /*-----------------------------------------------------------------+
    *
    * 説明: キー押下コールバック.
    *
    * 引数:
    *   KeyboardEvent event: イベント.
    *
    +-----------------------------------------------------------------*/
    static #KeyDown(event)
    {
        let message = new InputMessage(event.key, KeyState.Push())
        InputManager.#messageQueue.push(message)
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: キー解放コールバック.
    *
    * 引数:
    *   KeyboardEvent event: イベント.
    *
    +-----------------------------------------------------------------*/
    static #KeyUp(event)
    {
        let message = new InputMessage(event.key, KeyState.Pull())
        InputManager.#messageQueue.push(message)
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: キーの状態を取得する.
    *
    * 引数:
    *   string key: 取得したいキーの名前.
    *
    * 戻り値:
    *   number: キーの状態.
    *
    +-----------------------------------------------------------------*/
    static GetKeyState(key)
    {
        if (!(key in InputManager.#keyState)) return KeyState.Idle();
        return InputManager.#keyState[key].GetState();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: InputManager を初期化する.
    *
    +-----------------------------------------------------------------*/
    static Start()
    {
        InputManager.#keyState = {};
        InputManager.#messageQueue = [];
        window.addEventListener('keydown', InputManager.#KeyDown);
        window.addEventListener('keyup', InputManager.#KeyUp)
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 入力の状態を更新する.
    *
    +-----------------------------------------------------------------*/
    static Update()
    {
        for (let key of Object.keys(InputManager.#keyState))
        {
            InputManager.#keyState[key].Update();
        }

        for (let message of InputManager.#messageQueue)
        {
            let key   = message.GetKey();
            let state = message.GetState();
            let push  = KeyState.Push();
            let pull  = KeyState.Pull();
            let exist = key in InputManager.#keyState;

            if (!exist) InputManager.#keyState[key] = new KeyObserver();
            if (state === push) InputManager.#keyState[key].OnPush();
            if (state === pull) InputManager.#keyState[key].OnPull();
        }

        InputManager.#messageQueue = [];
    }
}