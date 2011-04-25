
/**
 * TEST Environment settings
 */
module.exports = function(app,express) {
		
	  app.set('db-uri', 'mongodb://localhost/calipso-prod');		  

    // Change to suit - this key works for calip.so
    app.set('google-analytics-key', 'UA-17607570-4');
    
    // Discuss
    app.set('disqus-shortname', 'calipsojs');
    
    // App config
    app.set('server-url', 'http://calip.so');
        
    app.use(express.errorHandler({ dumpExceptions: true, showStack: false }));
	
}