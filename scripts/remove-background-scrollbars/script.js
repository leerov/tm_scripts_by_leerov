(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        body, main, .root {
            background: none !important;
        }
        * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }
        *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }
    `;
    document.head.appendChild(style);
})();
