# Table of Contents

## Research Organization Registry(ROR) Plugin

OJS 3 Plugin for adding  Organization names  for author affiliations provided by  [ROR.org](https://ror.org/)
Organizations maintained by ROR.org are automatically fetched using an auto suggesting function.
For multilingual journals, additionally supported languages will be pre-filled  given, [ROR.org](https://ror.org/) has the corresponding names in the OJS supported languages.

ROR ID is  integrated in the OJS reader interface up from OJS 3.3.
ROR Plugin is  shipped with the OJS Plugin gallery up from OJS 3.2. For Installation of OJS 3.2 reader interface support see [installation](#Installation).



Licensed under GPLv3. See [LICENSE](LICENSE) for details.

## User Documentation
* Adding the ROR organization name into your author affiliation. :movie_camera: [GIF Image](docu/ror.gif)
* Adding a customized organization name  with ROR ID :movie_camera: [GIF Image](docu/ror.gif)

## Installation
 1. Login as admin or Journal manager
 1. Select _Settings -> Website -> Plugins_
 1. Click On _Plugin Gallery_
 1. Select and click on _ROR Plugin_
 1. Click _Install_ in the opened modal and wait for the _installation_ to finish.
 1.  Click on _Enable_ button . ROR Plugin is installed under generic plugins.

**This step is _`only`_ required, if your OJS 3.2 is prior to `30.11.2020` or  your are _`not`_ using `default theme`**

 *  Select _templates/frontend/objects/article_details.tpl_
 *   Find the following code in the template.
 ```xml
<span class="affiliation">
    {$author->getLocalizedData('affiliation')|escape}
</span>
```
*  Add the ROR Icon template varible
```xml
<span class="affiliation">
    {$author->getLocalizedData('affiliation')|escape}
    {if $author->getData('rorId')}
        <a href="{$author->getData('rorId')|escape}">{$rorIdIcon}</a>
    {/if}
</span>
```


## Features

### Release 1.0

* Allows auto-suggesting organization names
* Pre-fills  affiliations in multilingual context
* Subsequent alteration of the ROR-suggested organization name is also possible by maintaining the ROR Plugin, wich can be helpful in special cases e.g. adding a institute name for a research organization.
* OJS 3.3 compatibility

### Release 2.0
* OpenAire / DAatacite / Crossref Support
* Support for user affiliations
* Usability requests specially for dissemination plugins

### Release 3.0

* Multilingual organization support
# Development
- https://github.com/withanage/

## Contributions
- https://github.com/GaziYucel/
- https://github.com/YvesLepidus
- https://github.com/JhonathanLepidus
- https://github.com/mhvezina

# Contribute

- Fork the repository
- Make your changes
- Open a PR with your changes

# License

This project is published under GNU General Public License, Version 3.






