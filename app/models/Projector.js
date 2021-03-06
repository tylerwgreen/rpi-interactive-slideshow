var execFile	= require('child_process').execFile;
var fs			= require('fs');

var Projector		= {
	params:	{
		binDir:		null,
		videoDir:	null,
	},
	init:		function(params){
		console.log('Projector.init', params);
		// config params
		this.params.binDir = params.binDir;
		this.params.videoDir = params.videoDir;
	},
	quit:		function(params){
		console.log('Projector.quit');
		child = execFile(
			Projector.params.binDir + 'quit-playback',
			[],
			function(error, stdout, stderr){
				if(error){
					// console.log('Projector.quit.error.error');
					// console.log(error);
					console.log('Projector.quit.error.stderr');
					console.log(stderr);
					params.errorCB(error);
				}else{
					console.log('Projector.quit.success.stdout');
					console.log(stdout);
					params.successCB();
				}
			}
		);
	},
	project:	function(params){
		console.log('Projector.project');
		child		= execFile(
			Projector.params.binDir + 'projector-project',
			[Projector.params.videoDir + params.fileName],
			function(error, stdout, stderr){
				if(error){
					// console.log('Projector.dustyLoops.play.error.error');
					// console.log(error);
					console.log('Projector.project.error.stderr');
					console.log(stderr);
					params.errorCB(error);
				}else{
					console.log('Projector.project.success.stdout');
					console.log(stdout);
					params.successCB();
				}
			}
		);
	}
};
module.exports = Projector;