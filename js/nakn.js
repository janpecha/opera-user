/** Vylepseni formulare na Nahlizeni do katastru nemovistosti
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2013-08-12-2
 * @license		New BSD License
 */

function nah_SelectAreaFormHelper()
{
	var el = document.getElementById('ctl00_bodyPlaceHolder_txtParcis');
	var elNext = document.getElementById('ctl00_bodyPlaceHolder_txtParpod');
	
	if(el && elNext)
	{
		nah_addEvent(el, 'keydown', function(e) {
			var code;
			
			if(!e)
			{
				var e = window.event;
			}
			
			if(e.keyCode)
			{
				code = e.keyCode;
			}
			else if(e.which)
			{
				code = e.which;
			}
			
			// TODO: SHIFT + ú (=> '/')
			// TODO: CTRL+V => parsing by 'xxx/yy'
			
			if(code === 47 || code === 191/* [/] */ || code === 111)
			{
				elNext.focus();
				elNext.select();
				
				nah_cancelEvent(e);
				return false;
			}
		});
	}
	else
	{
		alert('error');
	}
}

function nah_addEvent(el, type, handler) {
	if(el.addEventListener)
	{
		el.addEventListener(type, handler, false);
		return true;
	}
	else
	{
		if(el.attachEvent)
		{
			return el.attachEvent('on' + type, handler);
		}
	}
	return false;
}

function nah_cancelEvent(e)
{
	e = e ? e : window.event;

	if(e.stopPropagation)
	{
		e.stopPropagation();
	}	

	if(e.preventDefault)
	{
		e.preventDefault();
	}

	e.cancelBubble = true;
	e.cancel = true;
	e.returnValue = false;

	return false;
}

/******************************************************************************/
// UserJS Binding for Opera Browser - DELETE IT! RUN nah_SelectAreaFormHelper();

if((location.hostname == 'nahlizenidokn.cuzk.cz' || location.hostname == 'nah.cuzk.cz') && (location.pathname.indexOf('/VyberParcelu.aspx') == 0))
{
	//http://www.opera.com/docs/userjs/examples/
	addEventListener('load', function (e) {
		if (!document.body)
		{
			return;
		}
		
		nah_SelectAreaFormHelper();
	}, false);
}

