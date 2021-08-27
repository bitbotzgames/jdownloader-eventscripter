// Makes file names of added links more readable, especally videos
// If you grab a file like:
// Home.Before.Dark.S02E03.German.Subbed.720p.WEB.h264-WvF
// it gets converted to:
// Home Before Dark S02E03

// Change to your language
var yourLanguage = "German";

try {
	var linkName = link.getName();
    
    if (linkName !== null) {
        // extract extension
        var extension = (linkName.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
            
        // Replace dots with spaces
        linkName = linkName.split('.').join(' ');

        // remove extension
        linkName = linkName.substring(0, linkName.length - extension.length);

        linkName = linkName.split(yourLanguage.toLowerCase())[0];
        linkName = linkName.split(yourLanguage)[0];
        linkName = linkName.split(yourLanguage.toUpperCase())[0];

        // Remove space at end if present
        if (linkName.slice(-1) == " ") {
            linkName = linkName.substring(0, linkName.length - 1);
        }

        link.setName(linkName + "." + extension);
    }
    
} catch(error) {
    // Quiet crash
}
