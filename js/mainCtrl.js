//	=	=	=	=	=	=	=	=	=	=	=	=	=	
//
//	Main Controller for first Angular App
//
//	=	=	=	=	=	=	=	=	=	=	=	=	=

angular.module('friendsList').controller('mainCtrl', function($scope) {
	
	$scope.name = "The Dread Emperor: Xandar the Terrible";
	$scope.friends = [{name:'Riley'},{name:'Marissa'},{name:'Adam'},{name:'Ammon'},{name:'Jamie'},{name:'Reina'}];


	$scope.addFriend = function(){
		var newFriend = {name:$scope.newFriend}
		$scope.friends.push(newFriend);
		$scope.newFriend = "";
	}


	$scope.toggleGoodness = function(friendObj) {
		friendObj.isNaughty = !friendObj.isNaughty;
	}

	});

