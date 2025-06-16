	function GetLinkGraphhopper(LatO,LonO,LatD,LonD) {
		var Link = "https://graphhopper.com/maps/?point=" + LatO +"%2C" + LonO + "&point=" + LatD + "%2C" + LonD + "&locale=pt-BR&vehicle=car&weighting=fastest&elevation=true&use_miles=false&layer=OpenStreetMap";
		return Link;
	}

	function HrefFromURLPlus(Link,Classe,Titulo,Conteudo,Alvo,Icon) {
		var Icone = "<i class='bi " + Icon + "'></i> ";
		var TagAlvo = "";
		if ( Alvo ) {
			TagAlvo = " target='"+ Alvo +"' ";
		}
		FullLink = "<a href='" + Link + "' class='" + Classe + "' title='"+ Titulo + "' " + TagAlvo + " >"+ Icone + Conteudo +"</a>";
		return FullLink;
	}    