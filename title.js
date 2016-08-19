/**********************************************
*  BIBLE.popcastle.com      Code by popcastle *
*  ...:  P o p   C a s t l e   T e a m  :...  *
*           Email -> xiaole@popcastle.com     *
*           Links -> http://www.popcastle.com *
*                 -> http://bbs.popcastle.com *
**********************************************/

Base_PicURL = "images/";

function PreLoadImage() {
	var _doc = document; 
	if(_doc.images) { 
		if(!_doc._val) _doc._val = new Array();
		for(_loop=0; _loop<=9; _loop++) {
			_doc._val[_loop]     = new Image; 
			_doc._val[_loop].src = Base_PicURL + _loop + ".gif";
		}
		_doc._val[10]     = new Image; 
		_doc._val[10].src = Base_PicURL + "m.gif";
		_doc._val[11]     = new Image; 
		_doc._val[11].src = Base_PicURL + "b.gif";
	}
}

PreLoadImage();

function DigitalWatch() {
	NowTime  = new Date();
	_hour    = NowTime.getHours();
	_minute  = NowTime.getMinutes();
	_second  = NowTime.getSeconds();

	var hour_l   = _hour % 10;
	var hour_h   = (_hour-hour_l) / 10;
	var minute_l = _minute % 10;
	var minute_h = (_minute-minute_l) / 10;
	var second_l = _second % 10;
	var second_h = (_second-second_l) / 10;

	document.hour_h.src    = Base_PicURL + hour_h   + ".gif";
	document.hour_l.src    = Base_PicURL + hour_l   + ".gif";
	document.minute_h.src  = Base_PicURL + minute_h + ".gif";
	document.minute_l.src  = Base_PicURL + minute_l + ".gif";
	document.second_h.src  = Base_PicURL + second_h + ".gif";
	document.second_l.src  = Base_PicURL + second_l + ".gif";

	ID = window.setTimeout('DigitalWatch()',1000)
}

function showhead() {
	document.write ("<!--外框--><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" height=\"100%\"><tr><td valign=\"top\" align=\"center\">\r\n");
	document.write ("<!--实体--><table width=\"760\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
	document.write ("<!--上部--><tr><td colspan=\"2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr>\r\n");
	document.write ("<!--左上管--><td width=\"23\" valign=\"top\" background=\"images/if-hhl.gif\"><img src=\"images/if-clu.gif\" width=23 height=24><br><img src=\"images/if-mvl.gif\" width=23 height=53><br></td>\r\n");
	document.write ("<!--中间管--><td rowspan=\"2\" valign=\"top\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
	document.write ("<!--标题区--><tr><td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" background=\"images/if-tback.gif\"><tr>\r\n");
	document.write ("<!--时间显示--><td align=\"left\"><table width=\"246\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td colspan=\"3\"><img src=\"images/if-tu.gif\" width=246 height=10></td></tr><tr><td width=\"62\"><img src=\"images/if-tml.gif\" width=62 height=14></td><td width=\"161\" bgcolor=\"#818c8b\"><img src=\"images/if-ttime.gif\" width=105 height=14><img src=\"images/b.gif\" width=\"1\" height=\"14\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"hour_h\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"hour_l\"><img src=\"images/m.gif\" width=\"3\" height=\"14\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"minute_h\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"minute_l\"><img src=\"images/m.gif\" width=\"3\" height=\"14\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"second_h\"><img src=\"images/b.gif\" width=\"8\" height=\"14\" name=\"second_l\"><img src=\"images/b.gif\" width=\"1\" height=\"14\"></td><td align=\"right\" width=\"23\"><img src=\"images/if-tmr.gif\" width=23 height=14></td></tr><tr><td colspan=\"3\"><img src=\"images/if-td.gif\" width=246 height=12></td></tr></table></td>\r\n");
	document.write ("<!--标题显示--><td width=\"349\" valign=\"top\" align=\"right\"><img src=\"images/if-tword.gif\" width=349 height=36></td></tr></table></td></tr>\r\n");
	document.write ("<!--中间内容--><tr><td valign=\"top\" background=\"images/pback.gif\"><table width=\"100%\" height=\"150\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
	document.write ("<!--空开十个点--><tr height=\"10\"><td><img src=\"images/spacer.gif\" width=\"10\" height=\"10\"></td></tr><tr><td height=\"130\" valign=\"top\">\r\n");
}

function showfoot() {
	document.write ("<!--空开十个点--></td></tr><tr height=\"10\"><td><img src=\"images/spacer.gif\" width=\"10\" height=\"10\"></td></tr></table></td></tr>\r\n");
	document.write ("<!--中上管--><tr><td height=\"10\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" background=\"images/if-hhd.gif\"><tr><td height=\"10\" align=\"left\"><img src=\"images/if-mhd.gif\" width=53 height=10></td><td align=\"right\" height=\"10\"><img src=\"images/if-mhd.gif\" width=53 height=10></td></tr></table></td></tr></table></td>\r\n");
	document.write ("<!--右上管--><td width=\"23\" valign=\"top\" background=\"images/if-hhr.gif\"><img src=\"images/if-cru.gif\" width=23 height=24><br><img src=\"images/if-mvr.gif\" width=23 height=53></td></tr>\r\n");
	document.write ("<!--左下管--><tr><td width=\"23\" valign=\"bottom\" background=\"images/if-hhl.gif\"><img src=\"images/if-mvl.gif\" width=23 height=53><br><img src=\"images/if-cld.gif\" width=23 height=25></td>\r\n");
	document.write ("<!--右下管--><td width=\"23\" valign=\"bottom\" background=\"images/if-hhr.gif\"><img src=\"images/if-mvr.gif\" width=23 height=53><br><img src=\"images/if-crd.gif\" width=23 height=25></td></tr></table></td></tr>\r\n");
	document.write ("<!--实体结束--></td></tr></table>\r\n");
	document.write ("<!--外框结束--></td></tr></table>\r\n");
	DigitalWatch();
}

function showline() {
	document.write ("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" background=\"images/dback.gif\"><tr><td><img src=\"images/spacer.gif\" width=\"1\" height=\"6\"></td></tr></table>");
}

document.write ("<style>\r\n");
document.write ("body { margin-top: 10px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; background-color: \#7c7c7c; scrollbar-face-color:\#505050; scrollbar-shadow-color:\#cccccc; scrollbar-highlight-color:\#cccccc; scrollbar-3dlight-color:\#3a3a3a; scrollbar-darkshadow-color:\#3a3a3a; scrollbar-track-color:\#3a3a3a; scrollbar-arrow-color:\#a0a0a0 }\r\n");
document.write ("a { font-family: \"Verdana\", \"Arial\"; font-size: 9pt; color: \#cccccc; text-decoration: none; font-weight: normal }\r\n");
document.write ("a:hover, a:active { font-family: \"Verdana\", \"Arial\"; font-size: 9pt; color: \#ffffff; text-decoration: underline; font-weight: normal }\r\n");
document.write ("body, div, p, span, td { font-family: \"Verdana\", \"Arial\"; font-size: 9pt; line-height: 14pt; color: \#cccccc; font-weight: normal}\r\n");
document.write ("</style>\r\n");
