/*
 * A helper function to look at the expression tree
 */

function inspect( item, indent ) {
	indent = (indent) ? indent : 0;
	var ic = '    ';
	var is = new Array(indent + 1).join(ic);
	
	switch( true ) {
		case item instanceof Tree.Relation:
			return is + 'Relation(' + item.name + ')';
		
			
		case item instanceof Tree.Projection:
			return is + 'Projection(' + "\n" + 
			       inspect( item.projectionList, indent + 1) + ',' + "\n" + 
			       inspect( item.relation, indent + 1 ) + "\n" + 
			       is + ')';
		
			
		case item instanceof Tree.Rename:
			return is + 'Rename(' + "\n" + 
			       inspect( item.renameList, indent + 1) + ',' + "\n" + 
			       inspect( item.relation, indent + 1 ) + "\n" + 
			       is + ')';	

		case item instanceof Tree.Selection:
			return is + 'Selection(' + "\n" + 
			       inspect( item.criteria, indent + 1) + ',' + "\n" + 
			       inspect( item.relation, indent + 1 ) + "\n" + 
			       is + ')';	
		
			
		case item instanceof Tree.ProjectionList:
		 	return is + 'ProjectionList(' + item.list.join(', ') + ')';
		
		
		case item instanceof Tree.RenameList:
		 	var rtn = is + 'RenameList(' + "\n"; 
			for( var i = 0; i < item.list.length; i++ ) {
				rtn += is + ic + item.list[i][0] + ' -> ' + item.list[i][1] + ',' + "\n";
			}
			return rtn.substr(0, rtn.length -2 ) + "\n" + is + ')';
			
		
		case item instanceof Tree.Union:
			return is + 'Union(' + "\n" +
			       inspect( item.left,  indent + 1 ) + ',' + "\n" +
			       inspect( item.right, indent + 1 ) + "\n" + 
			       is + ')';

		case item instanceof Tree.Attribute:
			return is + 'Attribute(' + item.name + ')';
			
		case item instanceof Tree.Value:
			var value = (typeof(item.value) == 'string') ? '"' + item.value + '"' : item.value;
			return is + 'Value(' + value + ')';

		case item instanceof Tree.Criteria:
			return is + 'Criteria(' + inspect( item.left, -1) + ' ' + item.op + ' ' + inspect( item.right, -1) + ')';
			
		case item instanceof Tree.CriteriaComposition:
			return is + 'CriteriaComposition(' + "\n" +
			       inspect( item.left, indent + 1) + "\n" + 
			       is + ic + item.comp + "\n" + 
			       inspect( item.right, indent + 1) + "\n" + 
			       is + ')';

		default:
			return 'Whoa?';
	}
}