const descriptionId = 'description';
const selectionNameId = 'selectionName';
const charLimitId = 'charLimit';
const blockId = Math.random();

document.getElementById(selectionNameId).addEventListener('change', setContent);
document.getElementById(descriptionId).addEventListener('change', setContent);
document.getElementById(charLimitId).addEventListener('change', setContent);

var sdk = new window.sfdc.BlockSDK({
    blockEditorWidth: 600,
    tabs: ['htmlblock', 'stylingblock']
});

/*
sdk.getContent(function (data) {
    console.log(data);
    if (data) {
        document.getElementById(descriptionId).value = data;
    }
});
*/


sdk.getData(function (data) { 
    console.log(data);
    if (data && data['dmFreeTextBlock']) {
        document.getElementById(selectionNameId).value = data['dmFreeTextBlock']['selectionName'];
        document.getElementById(descriptionId).value = data['dmFreeTextBlock']['description'];
        document.getElementById(charLimitId).value = data['dmFreeTextBlock']['charLimit'];          
    }
});

function setContent(){
    const descriptionValue = document.getElementById(descriptionId).value;
    const selectionNameValue = document.getElementById(selectionNameId).value;
    const charLimitValue = document.getElementById(charLimitId).value;
    const dmTextBlock = {
        dmFreeTextBlock:
        {
            dmBlockId: blockId,
            version: 1,
            selectionName: selectionNameValue,
            description: descriptionValue,
            charLimit: charLimitValue
        }
    };
    sdk.setSuperContent(selectionNameValue);
    sdk.setContent(`<div data-dm-block-id="`+blockId+`" class="dm-free-text-block"></div>`);
    sdk.setData(dmTextBlock);
}