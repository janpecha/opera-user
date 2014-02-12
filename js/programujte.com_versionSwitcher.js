/** Versions Switcher for programujte.com
 * 
 * switching between normal and mobile version
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012.01.16-1
 */

//window.alert(location.hostname);

if((location.hostname == 'programujte.com' || location.hostname == 'm.programujte.com') && (location.pathname.indexOf('/clanek') == 0))
{
	//http://www.opera.com/docs/userjs/examples/
	addEventListener('load', function (e)
	{
		if (!document.body)
		{
			return;
		}
	  
		var styles = '';
		styles += 'background:#eee;';
		styles += 'z-index:1000;';
		styles += 'border:1px solid silver;';
		styles += 'color:gray;';
		styles += 'position:fixed;';
		styles += 'right:10px;';
		styles += 'top:10px;';
		styles += 'font-size:14px;';
		styles += 'text-shadow: #ccc 1px 1px 1px;';
		styles += 'border-radius:3px;';
		styles += 'padding:4px 8px;';
		styles += 'text-decoration:none;';
		
		var url = 'http://';
		var domain = 'programujte.com';
		
		if(location.hostname == 'programujte.com')
		{
			var pos = location.pathname.indexOf('-');
			
			if(pos != -1)
			{
				url += 'm.' + domain + location.pathname.substr(0, pos) + '/';
			}
			else
			{
				url = '#';
			}
		}
		else // snad m.programujte.com
		{
			url += domain + location.pathname;
		}

		document.body.innerHTML = '<a href="' + url + '" style="' + styles + '">Přepnout</a>' + document.body.innerHTML;
	}, false);
}

