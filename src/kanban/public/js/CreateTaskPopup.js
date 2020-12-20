export class CreateTaskPopup {
    constructor(popClassName, modalClassName) {
        this.popClassName = popClassName;
        this.modalClassName = modalClassName;

        this.mainDiv = null;
        this.inputTitle = null;
        this.confirmBtn = null;

        this.initPopupView();

        this.blur();
    }

    initPopupView() {
        const mainDiv = this.initMainDiv();
        const modalDiv = this.initModalDiv();
        modalDiv.append(...this.initPopupContent());

        mainDiv.append(modalDiv);
    }

    initMainDiv() {
        this.mainDiv = document.createElement('div');
        this.mainDiv.classList.add(this.popClassName);

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
                "value": data
            })
        });

        try {
            const responseData = await promise.json();

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
            this.removeDomElement();

            if (this.addBlockCbk) {
                this.addBlockCbk(data);
            }
        }
    }

    initPopupContent() {
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

        inputWrapper.append(this.inputTitle);

        this.confirmBtn = document.createElement('button');
        this.confirmBtn.append(document.createTextNode('Ready')) ;
        this.confirmBtn.addEventListener('click', () => this.confirmBtnUse())

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
        setTimeout(() => this.inputTitle.focus(), 0);
        
        return this.mainDiv;
    }
}