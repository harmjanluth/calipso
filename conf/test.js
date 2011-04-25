
/**
 * PRODUCTION Environment settings
 */
module.exports = function(app,express) {
		
  	app.set('db-uri', 'mongodb://localhost/calipso-test');
  	  
    // Change to suit - this key works for calip.so
    app.set('google-analytics-key', 'UA-17607570-4');
  
    app.set('disqus-shortname', 'calipsojs');
    
    // App config
    app.set('server-url', 'http://localhost:3000');
    
    
    app.use(express.errorHandler({ dumpExceptions: false, showStack: false }));
	
}