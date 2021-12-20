export default {
    getContentExcerpt(content, excerptLength = 15) {
        /**
         * Strip HTML Tags
         * https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
         */
        content = this.stripHtml(content);

        const array = content.trim().split(' ');
        const ellipsis = array.length > excerptLength ? '...' : '';

        return array.slice(0, excerptLength).join(' ') + ellipsis;
    },
    stripHtml(htmlString) {
        return htmlString.replace(/(<([^>]+))>/gi, "");
    }
}