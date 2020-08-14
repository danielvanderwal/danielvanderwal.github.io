var store = [{
        "title": "NGINX Basics",
        "excerpt":"The /etc/nginx directory: Location for all configuration files: nginx.conf Virtual host configuration files: conf.d directory (RHEL) sites-available directory (debian/ubuntu) sites-enabled directory (debian/ubuntu) Module configuration files: conf.d directory modules-available directory modules-enabled directory The nginx.conf file: Defines global configuration Server process configuration: User server runs as Location of PID file Performance: worker_processes...","categories": ["NGINX"],
        "tags": [],
        "url": "http://localhost:3000/nginx/1_basic_nginx_server_configuration/",
        "teaser": null
      },{
        "title": "NGNIX - Rewrites",
        "excerpt":"NGINX - Rewrites The rewrite directive: Changes part or all of the URL in a client request: To inform clients that the resource they’re requesting now resides at a different location To control the flow of processing within NGINX: Example: To forward requests to an application server when content needs...","categories": ["NGINX"],
        "tags": ["nginx rewrite forward external"],
        "url": "http://localhost:3000/nginx/10_rewrites/",
        "teaser": null
      },{
        "title": "NGNIX - Configuring Virtual Hosts",
        "excerpt":"NGINX - Configuring Virtual Hosts Virtual host configuration file locations: /etc/nginx/conf.d /etc/nginx/sites-available /etc/nginx/sites-enabled Virtual host configuration files are pulled into nginx.conf via include Virtual Host Configuration Files: Will have a server block, at a minimum: listen &lt;port&gt;; root /some/location; server_name name(s); location &lt;directory&gt;; Contains a place to “isolate” configuration for...","categories": ["NGINX"],
        "tags": [],
        "url": "http://localhost:3000/nginx/2configuring_virtual_hosts/",
        "teaser": null
      },{
        "title": "NGINX - Configuring Custom Error Pages in NGINX",
        "excerpt":"Configuring Custom Error Pages in NGINX Why Custom Error Pages? Match “look and feel” of the site Provide customized information “Sanitize” server information “Catch all” for response codes that don’t require a unique error page Configure “custom” action to one or more response codes Configure a Single Error: Custom error...","categories": ["NGINX"],
        "tags": ["nginx error pages"],
        "url": "http://localhost:3000/nginx/3_configuring_custom_error_pages/",
        "teaser": null
      },{
        "title": "NGNIX - Directives (Upsteam, Location, Return)",
        "excerpt":"NGINX - Directives - Upstream / Location / Return The upstream directive The upstream directive defines groups of servers that can be referenced by the proxy_pass, fastcgi_pass, uwsgi_pass, scgi_pass, memcached_pass, and grpc_pass directives: upstream testdomainapp { server app1.testdomain.local:8085; server app2.testdomain.local:8086 backup; server app3.testdomain.local:8087 backup; } By default, requests are distributed...","categories": ["NGINX"],
        "tags": ["nginx directives upstream location return"],
        "url": "http://localhost:3000/nginx/4_directives_upstream_location_return/",
        "teaser": null
      },{
        "title": "NGNIX - Load Balancing",
        "excerpt":"NGINX - Load Balancing - An Introduction The upstream directive The upstream directive defines groups of servers that can be referenced by the proxy_pass, fastcgi_pass, uwsgi_pass, scgi_pass, memcached_pass, and grpc_pass directives: upstream testdomainapp { server app1.testdomain.local:8085; server app2.testdomain.local:8086 backup; server app3.testdomain.local:8087 backup; } By default, requests are distributed between the...","categories": ["NGINX"],
        "tags": ["nginx load balancing distributed"],
        "url": "http://localhost:3000/nginx/6_load_balancing/",
        "teaser": null
      },{
        "title": "NGNIX - Blocking Access by IP with NGINX",
        "excerpt":"Blocking Access by IP with NGINX allow directive deny directive Restrict Access By IP Address The ngx_http_access_module allows limiting access to certain client addresses. Rules are checked in order until the first match is found. The allow and deny directives can be used within the http, server, location, and limit_except...","categories": ["NGINX"],
        "tags": ["nginx ip filtering blocking allow deny"],
        "url": "http://localhost:3000/nginx/7_blocking_access_by_ip/",
        "teaser": null
      },{
        "title": "NGNIX - Creating SSL Certificates Using OpenSSL",
        "excerpt":"Creating SSL Certificates Using OpenSSL Create a Certificate Authority Private Key and Certificate First, we’ll need a place to store our certificates: mkdir -p /etc/nginx/certificates cd /etc/nginx/certificates Generate a private key for the CA: openssl genrsa 2048 &gt; ca-key.pem Generate the X509 certificate for the CA: openssl req -new -x509...","categories": ["NGINX"],
        "tags": ["nginx ssl certificate openssl"],
        "url": "http://localhost:3000/nginx/8_creating_ssl_certificates_using_openssl/",
        "teaser": null
      },{
        "title": "NGNIX - Securing Virtual Hosts - HTTPS",
        "excerpt":"NGINX - Securing Virtual Hosts - HTTPS SSL/TLS Configuration Examples server { listen 443 ssl; server_name www.example.com; ssl_certificate www.example.com.crt; ssl_certificate_key www.example.com.key; ssl_protocols TLSv1 TLSv1.1 TLSv1.2; ssl_ciphers HIGH:!aNULL:!MD5; ... } There are many ways you can configure a server with listen: IPv4, IPv6, with or without IP address/port and UNIX sockets....","categories": ["NGINX"],
        "tags": ["nginx secure ssl tls certificate x509 key 443"],
        "url": "http://localhost:3000/nginx/9_securing_virtual_hosts_https/",
        "teaser": null
      },{
        "title": "Grep and RegEx",
        "excerpt":"Using grep and Regular Expressions grep = designed for finding matching patterns usage: grep pattern file options e.g. find . -name \\*.txt | grep taxes -i Options -i = case insensitive -r = recursive through directories -v = finds all instances of no pattern match -w = serches for single...","categories": ["Linux"],
        "tags": ["linux grep regex"],
        "url": "http://localhost:3000/linux/1_Grep_&_Regex/",
        "teaser": null
      },{
        "title": "SSH",
        "excerpt":"SSH Common Flags -l Used to specify username -i filename Used to specify private key used for authenticating -F filename Used for specifying which config file is used, default is: ~/.ssh/config ssh example ssh username@hostname Keys Private key: On user device Public key: On server You can use key pairs...","categories": ["Linux"],
        "tags": ["linux ssh secure shell private public key"],
        "url": "http://localhost:3000/linux/3_ssh/",
        "teaser": null
      },{
        "title": "Logging In and Switching Users",
        "excerpt":"Logging In and Switching Users su command switch user command Sign in as root su - Sign in as user su - clouduser Must include the dash to inherit $PATH of user Interactive and login shells .bash_profile: login shell, executed to configure things before the initial command prompt. .bashrc: interactive...","categories": ["Linux"],
        "tags": ["linux user login"],
        "url": "http://localhost:3000/linux/4_Logging_In_&_Switching_Users/",
        "teaser": null
      },{
        "title": "IO Redirection",
        "excerpt":"IO Redirection stdin - keyboard stout - screen stderr - error outputs Output redirection ls -al &gt; listing echo \"This is a test\" &gt;&gt; /var/log/messages Input redirection sort &lt; listing sort &lt; listing &gt; sorted_list Pipes ls -l | less # only outputs one screen at a time du |...","categories": ["Linux"],
        "tags": ["linux pipes redirection input output stdin stout stderr"],
        "url": "http://localhost:3000/linux/2_IO_Redirection/",
        "teaser": null
      },{
        "title": "Compressing and Decompressing Files",
        "excerpt":"Compressing and Decompressing Files Creating archive tar cvf example.tar /sourcedir Extracting archive tar xvf example.tar Two main compression commands: gzip bzip2 gzip example: gzip bigfile.stuff gzip -d bigfile.stuff.gz bzip2 example: bzip2 bigfile.stuff bzip2 -d bigfile.stuff.bz2 Compress an archive Tar does not compress by default tar czvf home.tar.gz /home or tar...","categories": ["Linux"],
        "tags": ["linux compression decompression tar bzip2 zip archive"],
        "url": "http://localhost:3000/linux/5_Compressing_and_Decompressing_Files/",
        "teaser": null
      },{
        "title": "Creating and Manipulating files",
        "excerpt":"Creating and Manipulating files Ways to modify files: touch: creates a zero byte files cp: copies one file to another mv: moves a file from one location to another, even across file systems. Also how to change the name of a file. rm: removes the inode-filename link. The data still...","categories": ["Linux"],
        "tags": ["linux","touch","cp","mv","rm","find","locate"],
        "url": "http://localhost:3000/linux/6_Creating_and_Manipulating_Files/",
        "teaser": null
      }]
