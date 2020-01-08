function($rootScope,$scope) {
	/* widget controller */
	var c = this;
	$rootScope.$on('selectNote', function(event,data) { 
		//console.log('Listener caught NoteID: ' + $rootScope.noteID);
		return $rootScope.noteID;
	});
	//console.log("am i here ? : " + $rootScope.noteID);
}