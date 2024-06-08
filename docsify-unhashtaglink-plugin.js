// Constants
let supportedFileExtensions = ['.pdf', '.html'];

function initLinkConverter() {
    console.log('Initializing Link Converter');
    handleLinks();
}

function handleLinks() {
    console.log('Handling Links');
    const links = document.querySelectorAll('a[href]');
    console.log('Found links:', links.length); // Log the number of links found
    links.forEach(link => {
        const url = link.getAttribute('href').toLowerCase();
        console.log('Processing link:', url);
        if (supportedFileExtensions.some(ext => url.endsWith(ext))) {
            const newUrl = resolveUrl(link.getAttribute('href'));
            console.log('Updating link:', url, 'to', newUrl);
            link.href = newUrl;
        }
    });
}

function resolveUrl(href) {
    let base = window.location.href.split('#')[0]; // Get the base URL without the hash
    if (base.endsWith('index.html')) {
        base = base.replace('index.html', ''); // Remove 'index.html' from base URL
    }

    let resolvedUrl;
    if (href.startsWith('http') || href.startsWith('/')) {
        resolvedUrl = href;
    } else {
        resolvedUrl = new URL(href, base).href;
    }

    resolvedUrl = resolvedUrl.replace('#/', '');
    console.log('Base URL:', base); // Debug output
    console.log('Resolved URL:', resolvedUrl); // Debug output
    return resolvedUrl;
}

function setSupportedFileExtensions(extensions) {
    supportedFileExtensions = extensions.map(ext => ext.toLowerCase());
}

// Docsify plugin integration
(function() {
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        console.log('Docsify plugin initialization');
        hook.init(function() {
            if (window.$docsify.unhashtagLinkExtensions) {
                setSupportedFileExtensions(window.$docsify.unhashtagLinkExtensions);
                console.log('Overridden file extensions:', supportedFileExtensions);
            }
        });
        hook.doneEach(function() {
            console.log('Docsify doneEach hook triggered inside plugin');
            initLinkConverter();
        });
    });
})();
