class ComponentContainer extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        const path = this.getAttribute('path');
        if (!path) {
            console.error('Error: "path" 属性が指定されていません。');
            this.innerHTML = '<p style="color: red;">コンポーネントの読み込みに失敗しました。path属性が必要です。</p>';
            return;
        }

        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            this.innerHTML = html;

        } catch (error) {
            console.error('コンポーネントの取得に失敗しました:', error);
            this.innerHTML = `<p style="color: red;">コンポーネント「${path}」の読み込み中にエラーが発生しました。</p>`;
        }
    }
}
customElements.define('component-container', ComponentContainer);