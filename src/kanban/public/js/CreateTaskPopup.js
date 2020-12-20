export default class CreateTaskPopup {
    constructor(popClassName, modalClassName) {
        this.popClassName = popClassName;
        this.modalClassName = modalClassName;

        this.mainDiv = null;
        this.inputTitle = null;
        this.confirmBtn = null;

        this.initPopupView();
        // this.inputTitle.focus();

        this.blur();
    }

    initPopupView() {
        const mainDiv = this.initMainDiv();
        const modalDiv = this.initModalDiv();
        modalDiv.append(...this.initPopupContent());
        // this.inputTitle.focus();

        mainDiv.append(modalDiv);
    }

    initMainDiv() {
        this.mainDiv = document.createElement('div');
        this.mainDiv.classList.add(this.popClassName);
        // this.mainDiv.append(this.initModalDiv());
        return this.mainDiv;
    }

    initModalDiv() {
        this.modalDiv = document.createElement('div');
        this.modalDiv.classList.add(this.modalClassName);
        
        return this.modalDiv;
    }

    async _fetchReqAddBlock(data) {
        const promise = await fetch('/popup/addBlock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": data,
                "id": 1
            })
        });

        try {
            const responseData = await promise.json();
            // console.log(responseData);

            return responseData;
        } catch(e) {
            console.log('ooohhhhh, no', e);
        }

        return null;
    }

   setBlockAddCbk(callback) {
       this.addBlockCbk = callback;
   }

    async confirmBtnUse() {
        if (this.inputTitle.value) {
            const data = await this._fetchReqAddBlock(this.inputTitle.value);
            // console.log(data);
            this.removeDomElement();
            if (this.addBlockCbk) {
                this.addBlockCbk(data);
            }
        }
    }

    initPopupContent() {
        // const modalDiv = this.initModalDiv();
        const title = document.createElement('div');
        title.classList.add('popup-title');
        title.append(document.createTextNode('Block title'));


        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('popup-input-wrapper');
        this.inputTitle = document.createElement('input');
        this.inputTitle.setAttribute('tabindex', 0);
        this.inputTitle.addEventListener('change', () => {
            this.confirmBtn.focus();
        });
        // this.inputTitle.focus();
        // this.inputTitle.setAttribute('autofocus', '');
        // this.inputTitle.focus();
        inputWrapper.append(this.inputTitle);

        this.confirmBtn = document.createElement('button');
        this.confirmBtn.append(document.createTextNode('Ready')) ;
        this.confirmBtn.addEventListener('click', () => this.confirmBtnUse())
        // this.confirmBtn.addEventListener('keydown', () => this.confirmBtnUse());
        // this.confirmBtn.focus();


        return [title, inputWrapper, this.confirmBtn];
    }


    removeDomElement() {
        this.mainDiv.remove();
    }

    blur(callback) {
        document.addEventListener('mousedown', (e) => {
            if (e.target === this.mainDiv) {
                this.removeDomElement();
            }   
        });
    }

    getDomElement() {
        // this.inputTitle.focus();
        setTimeout(() => this.inputTitle.focus(), 0);
        return this.mainDiv;
    }
}