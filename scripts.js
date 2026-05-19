var refTagger = {
        settings: {
        bibleVersion: "NBLH",
        roundCorners: true,
        tagLinksParentNodes: ["p", "blockquote", "cite", "li"], // <--- Agregá esto para cubrir tus textos
        noSearchClassNames: ["no-reftagger"],
        customStyle : {
            heading: {
                backgroundColor : "#081c15",
                color : "#d8f3dc"
            },
            body   : {
                        color : "#081c15"
            }   
        }
    }
};

(function(d, t) {
    var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
    g.src = "//api.reftagger.com/v2/RefTagger.es.js";
    s.parentNode.insertBefore(g, s);
}(document, "script"));


/* var refTagger = {
		settings: {
			bibleReader: "bible.faithlife",
			bibleVersion: "ESV",			
			roundCorners: true,
			socialSharing: ["google"],
			customStyle : {
				heading: {
					backgroundColor : "#081c15",
					color : "#d8f3dc"
				},
				body   : {
					color : "#081c15"
				}
			}
		}
	};
	(function(d, t) {
		var n=d.querySelector("[nonce]");
		refTagger.settings.nonce = n && (n.nonce||n.getAttribute("nonce"));
		var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
		g.src = "https://api.reftagger.com/v2/RefTagger.js";
		g.nonce = refTagger.settings.nonce;
		s.parentNode.insertBefore(g, s);
	}(document, "script")); */