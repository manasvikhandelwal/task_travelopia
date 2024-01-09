(function() {
    var expirationDate = new Date();
    expirationDate.setTime( expirationDate.getTime() + 31536000 * 1000 );
    document.cookie = "pll_language=gb; expires=" + expirationDate.toUTCString() + "; path=/; secure; SameSite=Lax";
}());
//  Google Tag Manager 
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKB6H8');