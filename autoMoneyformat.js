(() => {

    setTimeout(() => {
      var BrowserItemsofHistory = document.querySelectorAll('.browsing_historyBlock li.product-item .price');
    
        function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
    
        function setValueMoney(tag, itemNode) {
            var v = itemNode.querySelector(tag);
            v.innerText = numberWithCommas(v.innerText);
        }
    
        BrowserItemsofHistory.forEach(item => {
            setValueMoney('span.regular-price', item);
            setValueMoney('del.regular-price', item);
            setValueMoney('.sale-price', item);
        });
    },1000);  
    
    })();
