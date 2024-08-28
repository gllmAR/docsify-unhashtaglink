# Docsify-unhashtaglink
Docsify Unhashtag Link Plugin is a plugin for Docsify that modifies URLs for specified file types by removing hash routing, ensuring they resolve correctly.

[See it in online in Docsify](https://gllmar.github.io/docsify-unhashtaglink/#/)

## Features

- Automatically cleans URLs for specified file types, removing hash routing.
- Default file types: .pdf, .html.
- Supports overriding file types from the HTML configuration.


## Examples

* [subfolder](./subfolder/)

* [linkToPDF](./file.pdf)
* [linkToPureData](./analyse_audio.pd)

## Installation

### Include the plugin in your Docsify setup.

```html
<script src="./docsify-unhashtaglink-plugin.js"></script>
```

### Optionally, configure the file types you want to clean.

```html
<script>
  window.$docsify = {
    name: '',
    repo: '',
    unhashtagLinkExtensions: ['.pdf', '.html', '.docx'] // Override file types here
  };
</script>
```

## Usage

Simply include the plugin script in your Docsify HTML file. The plugin will automatically clean URLs for the specified file types.

## Example

```
index.html:
```
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover">
  <title>Docsify with Unhashtag Link Plugin</title>
  <link rel="stylesheet" //cdn.jsdelivr.net/npm/docsify/themes/vue.min.css" />
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      name: '',
      repo: '',
      unhashtagLinkExtensions: ['.pdf', '.html', '.docx'] // Override file types here
    };
  </script>
  <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>
  <script src="https://gllmar.github.io/docsify-unhashtaglink/docsify-unhashtaglink.js"></script>
</body>
</html>
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
