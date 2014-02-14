/** KK Vysociny REKS - vylepseni
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-06-14-1
 */

//window.alert(location.hostname);

if((location.hostname == 'kkvysociny.cz' || location.hostname == 'www.kkvysociny.cz') && (location.pathname.indexOf('/clavius') == 0))
{
	function kkReks_TabIndexUpdate(name, tabindex) {
		var els = document.getElementsByName(name);
		
		if(els.length)
		{
			els[0].setAttribute('tabindex', tabindex) ;
		}
	}
	
	//http://www.opera.com/docs/userjs/examples/
	addEventListener('load', function (e)
	{
		if (!document.body)
		{
			return;
		}
	  	
		// set tabindex
		kkReks_TabIndexUpdate('Autor', 1);
		kkReks_TabIndexUpdate('Cast', 2);
		kkReks_TabIndexUpdate('Nazev', 3);
		kkReks_TabIndexUpdate('Misto', 4);
		kkReks_TabIndexUpdate('RokVydani', 5);
		kkReks_TabIndexUpdate('Pcislo', 6);
		kkReks_TabIndexUpdate('ZpNabyti', 7);
		kkReks_TabIndexUpdate('Ckod', 8);
		kkReks_TabIndexUpdate('Datumvloz', 9);
		kkReks_TabIndexUpdate('Sign', 10);
		kkReks_TabIndexUpdate('Cena', 11);
		kkReks_TabIndexUpdate('Poznamka', 12);
		
		// Vyhledavaci stranka
		// focus na nazev knihy
		var inputs = document.getElementsByName('H2');
		
		if(inputs.length)
		{
			inputs[0].focus();
		}
		
		// prefill form inputs
		var sign = document.getElementsByName('Sign');
		
		if(sign.length)
		{
			sign[0].value = 'B';
		}
	}, false);
}

