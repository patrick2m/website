var tabProd = new Array(3);
tabProd[0] = [ // Produto 1
	"Death Note", 300, 450, 
	"DeathNoteA110", "Série Completa", 
	"Formato DVD - 5 discos", "90,00", "85,00"];
tabProd[1] = [ // Produto 2
	"Naruto Gold", 300, 450, 
	"NarutoGoldA110", "Mangá em Português", 
	"55 Volumes", "1100,00", "1000,00"];
tabProd[2] = [ // Produto 3
	"Naruto Shippuden", 300, 450, 
	"NarutoFigA110", "", 
	"Action Figure em PVC", "250,00", "210,00"];
function MostraProd(tipo) {
var jan = open("", tabProd[tipo][0], "location=no,status=no,width=" + tabProd[tipo][1] + ",height=" + tabProd[tipo][2] + "");
with (jan.document) {
write("<!DOCTYPE html>");
write("<html><head><title>Otaku On Titan</title>");
write("<link rel='stylesheet' type='text/css' href='CSS/OtakuOnTitan.css' ></head>");
write("<body><section>");
write("<div class='apres'>");
write("<h2>", tabProd[tipo][0], "</h2>"); // Título do Produto
write("<p><img src='imagens/", tabProd[tipo][3], ".jpg' /></p>"); // Foto do Produto
write("<p>", tabProd[tipo][4], "</p>" ); // 1º Informação
write("<p>", tabProd[tipo][5], "</p>" ); // 2º Informação
write("<p>Preço: R$ <span class='precoVelho'>", tabProd[tipo][6], "</span></p>" ); //Preço cortado
write("<p>Por ", tabProd[tipo][7], "</p>"); //Preço novo
write("<form>");
write("<input type='button' value='Fechar' onClick='window.close();'/>");
write("</form></div></section></body></html>");
close();
}
}
var tabProdutosIcon = [
["vazio", 0],
["NarShipB1T01A300", 60],
["NarShipB1T01A300", 60],
["AOT1-4A300", 130],
["AOT1-4A300", 130],
["NarutoBoxPart1A300", 130],
["RyukFigA300", 600]
];
function MostraCat(ind) {
var foto = document.getElementById("imgCat");
var prec = document.getElementById("prcCat");
foto.src = "Imagens/" + tabProdutosIcon[ind][0] + ".jpg";
prec.innerHTML = "<br/>Preço: R$ " + tabProdutos[ind][1] + ",00";
}
function VerificaCPF(campo) {
	var strCPF = campo.value;

	if ( strCPF.length != 11 ) { 
		alert("CPF tem de ter 11 dígitos!");
		return false;
	}
	var c, i;
	for ( i = 0; i < 11; i++ ) {
		c = strCPF.charAt(i);
		if ( (c < '0') || (c > '9')) {
			alert("CPF só pode ter dígitos, caracter " + c + " inválido!");
		return false;
		}
	}
	function calculaDV(num) {
		var resto = 0, soma = 0;
		for (i = 2; i < 11; i++) {
			soma = soma + ((num % 10) * i);
			num = parseInt(num / 10);
			}
			resto = (soma % 11);
			return (resto > 1) ? (11 - resto) : 0;
		}
	var	identCPF = strCPF.substring(0, 9);
	var primeiro_digito = calculaDV(identCPF)
	var segundo_digito  = calculaDV(identCPF * 10 + primeiro_digito)
	if (primeiro_digito != strCPF.charAt(9) )
		alert("Dígitos verificadores inválidos");
	if (segundo_digito != strCPF.charAt(10) )
		alert("Dígitos verificadores inválidos");
}
	var tabCategoria = [
	"Anime",
	"Mangá",
	"Action Figure" ];
	var tabProdutos = [
	[0, "Death Note - DVD - Completo", 85],
	[0, "Naruto Shippuden T01 Box 01", 60],
	[0, "Naruto Shippuden T01 Box 02", 60],
	[1, "Naruto Gold - 55 Vol.", 1000],
	[1, "Attack on Titan - Vol 1-4", 130],
	[1, "Attack on Titan - Vol 5-8", 130],
	[1, "Naruto Box P01 Vol 1-27", 130],
	[2, "Naruto Shippuden - PVC", 210],
	[2, "Ryuk - Death Note- PVC", 600],
	];
	function Compra(f) {
	var total = (f.TxtTotal.value > 0) ?
		parseFloat(f.TxtTotal.value) : 0;
	var nl = f.selProduto.selectedIndex - 1;
	var tp = tabProdutos[nl][0];
	f.listaPedidos.value += tabCategoria[tp] + " " + tabProdutos[nl][1] + "\n";
	f.TxtTotal.value = total + tabProdutos[nl][2];
}
