function($rootScope,$scope) {
	/* widget controller */
	var c = this;
	c.selectNote = function(number) {
		//console.log("Hello world : " + number);
		$rootScope.noteID = number;
		$rootScope.$emit('selectNote', number);
	}
}