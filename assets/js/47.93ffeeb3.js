(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{359:function(e,n,t){"use strict";t.r(n);var o=t(7),a=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://b3logfile.com/bing/20201117.jpg?imageView2/1/w/960/h/540/interlace/1/q/100",alt:""}})]),e._v(" "),n("p",[e._v("大数据的4V特征\n1.数据量大\n2.数据类型繁多\n3.商业价值高\n4.处理时效高")]),e._v(" "),n("p",[e._v("虚拟机网络设置\n1.使用NAT网络，配置静态IP")]),e._v(" "),n("p",[e._v("子网IP:192.168.10.0\n子网掩码：255.255.255.0\n网关IP：192.168.10.2")]),e._v(" "),n("p",[e._v("配置Linux主机网卡/etc/sysconfig/network-script/ifcfg-enoxxxx\nBOOTPROTO=static\n#NM_CONTROLLED=yes\nIPADDR=192.168.10.10\nNETMASK=255.255.255.0\nGATEWAY=192.168.10.2\nDNS1=114.114.114.114\nDNS2=8.8.8.8\nONBOOT=yes   开机启动")]),e._v(" "),n("p",[e._v("设置hosts,hostname\nvim /etc/hosts\nvim /etc/hostname\nservice network restart")]),e._v(" "),n("p",[e._v("192.168.10.10 master\n192.168.10.11 slave1\n192.168.10.12 slave2")]),e._v(" "),n("p",[e._v("关闭主机selinux,防火墙\nsystemctl stop firewalld\nsystemctl status firewalld\nsystemctl disable firewalld")]),e._v(" "),n("p",[e._v("vim /etc/selinux/config")]),e._v(" "),n("p",[e._v("安装JDK8\ntar -zxvf xxx.tar.gz -C /usr/local/jdk8\nvim /etc/profile")]),e._v(" "),n("p",[e._v("export JAVA_HOME=/usr/local/jdk8\nexport JRE_HOME=$JAVA_HOME/jre\nexport CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib\nexport PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin")]),e._v(" "),n("p",[e._v("source /etc/profile")]),e._v(" "),n("p",[e._v("配置主机间ssh免密登录\nssh-keygen -t rsa\nssh-copy-id xxx")]),e._v(" "),n("p",[e._v("配置主机间时钟同步")]),e._v(" "),n("p",[e._v("配置主机ulimit")]),e._v(" "),n("p",[e._v("安装Hadoop")]),e._v(" "),n("p",[e._v("使用hadoop\n格式化hdfs\tbin/hdfs namenode –format\nsbin/start-dfs.sh\nsbin/start-yarn.sh\nsbin/yarn-daemon.sh start resourcemanager\nsbin/mr-jobhistory-daemon.sh start historyserver")]),e._v(" "),n("p",[e._v("ResourceManager无法启动\njava.net.BindException: Problem binding to [slave1:8031] java.net.BindException: Cannot assign requested address; For more details see:  http://wiki.apache.org/hadoop/BindException\n解决办法：在ResourceManager所在节点上启动Yarn")]),e._v(" "),n("p",[e._v("hive\nhive-1.2.2 的执行引擎是MapReduce\nhive-2.x推荐使用Spark")]),e._v(" "),n("p",[e._v("centos7 mysql5.7的安装\nhttps://www.jianshu.com/p/1dab9a4d0d5f")]),e._v(" "),n("p",[e._v("bqf6S4xhty+q")]),e._v(" "),n("p",[e._v("mysql5.7 更改密码政策\nset global validate_password_policy=0;\nset global validate_password_length=4;\nset password for 'root'@'localhost'=password('hadoop');\nflush privileges;\nshow variables like 'validate_password%';")]),e._v(" "),n("p",[e._v("UPDATE user SET Host='%' WHERE User='root';")]),e._v(" "),n("p",[e._v("hive初始化mysql模式错误 schematool -dbType mysql -initSchema\nerver certificate verification.\norg.apache.hadoop.hive.metastore.HiveMetaException: Failed to get schema version.\n*** schemaTool failed ***\n解决办法：\nhive配置文件hive-site.xml中ConnectionURL\njdbc:mysql://slave2:3306/metastore?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=GMT")]),e._v(" "),n("p",[e._v('hive启动报错问题\nException in thread "main" java.lang.RuntimeException: java.lang.RuntimeException: Unable to instantiate org.apache.hadoop.hive.ql.metadata.SessionHiveMetaStoreClient\n解决办法：切换hive版本到2.3.7正常使用')]),e._v(" "),n("p",[e._v("beeline连接hiveserver2报错\nError: Could not open client transport with JDBC Uri: jdbc:hive2://master:10000: Failed to open new session: java.lang.RuntimeException: org.apache.hadoop.ipc.RemoteException(org.apache.hadoop.security.authorize.AuthorizationException): User: root is not allowed to impersonate anonymous (state=08S01,code=0)\nError: Could not open client transport with JDBC Uri: jdbc:hive2://master:10002: Invalid status 72 (state=08S01,code=0)")]),e._v(" "),n("p",[e._v("User: root is not allowed to impersonate anonymous\n修改hadoop配置文件core-site.xml\n"),n("property",[n("name",[e._v("hadoop.proxyuser.XXX.groups")]),e._v(" "),n("value",[n("em")])],1),e._v(" "),n("property",[n("name",[e._v("hadoop.proxyuser.XXX.hosts")]),e._v(" "),n("value")],1)],1),e._v(" "),n("p",[e._v('org.apache.hadoop.security.AccessControlException: Permission denied: user=anonymous, access=EXECUTE, inode="/tmp":root:supergroup:drwxrwx---\n解决办法：hdfs dfs -chmod 777 /tmp')]),e._v(" "),n("p",[e._v("beeline连接hiveserver2的命令：beeline -u jdbc:hive2://master:10000")]),e._v(" "),n("p",[e._v("FAILED: RuntimeException Cannot create staging directory 'hdfs://master:8020/user/hive/warehouse/hive_1.db/hive_01/.hive-staging_hive_2020-11-06_07-50-40_221_2980674749438456240-1': Permission denied: user=anonymous, access=WRITE, inode=\"/user/hive/warehouse/hive_1.db/hive_01\":root:supergroup:drwxr-xr-x\n解决办法：修改hdfs目录的权限")]),e._v(" "),n("p",[e._v("关闭hadoop安全模式：hadoop dfsadmin -safemode leave")]),e._v(" "),n("p",[e._v("问题描述：NAT模式下，重启虚拟机后无法连接到主机\n解决办法：重启VMnet8网络适配器")]),e._v(" "),n("p",[e._v("hiveQL")]),e._v(" "),n("p",[e._v('created_at,               tweet_id,                          tweet,                                                                                                                                                                                                likes,retweet_count,source,               user_id,           user_name,user_screen_name,user_description,user_join_date,         user_followers_count,user_location,             lat,             long,                          city,country,                          continent,        state,       state_code,collected_at\n2020-10-15 00:00:20,1.3165293050069524e+18,"@IslandGirlPRV @BradBeauregardJ @MeidasTouch This is how #Biden made his ! #TrumpIsNotAmerica !https://t.co/uBqAFU86Ip",0.0,  0.0,                 Twitter Web App,3494182277.0,Flag Waver,Flag_Wavers,         ,                        2015-08-30 19:38:21,1536.0,                      Golden Valley Arizona,46.3040364,-109.17143119999999,,     United States of America,North America,Montana,MT,           2020-10-21 00:00:01.035654566\ncreated_at,tweet_id,tweet,likes,retweet_count,source, user_id, user_name,user_screen_name,user_description,user_join_date,         user_followers_count,user_location,             lat,             long,                          city,country,                          continent,        state,       state_code,collected_at\n/root/data/US_Election/hashtag_donaldtrump.csv\n/root/data/US_Election/hashtag_joebiden.csv')]),e._v(" "),n("p",[e._v("create table if not exists US_Election (\ncreated_at timestamp,\ntweet_id double,\ntweet string,\nlikes double,\nretweet_count double,\nsource string,\nuser_id double,\nuser_name string,\nuser_screen_name string,\nuser_description string,\nuser_join_date timestamp,\nuser_followers_count double,\nuser_location string,\nlat double,\nlong double,\ncity string,\ncountry string,\ncontinent string,\nstate string,\nstate_code string,\ncollected_at timestamp)\nrow format delimited fields terminated by ','\nlocation '/data/US_Election/';")]),e._v(" "),n("p",[e._v("create table if not exists netflix_records (\nshow_id bigint,\ntype string,\ntitle string,\ndirector string,\ncast_1 string,\ncountry string,\ndate_added string,\nrelease_year int,\nrating string,\nduration string,\nlisted_in string,\ndescription string\n)\nrow format delimited\nfields terminated by ','\nlines terminated by '\\n'\nstored as textfile;")]),e._v(" "),n("p",[e._v("load data local inpath '/root/data/netflix/netflix_titles.csv' into table netflix_records;")]),e._v(" "),n("p",[e._v('show_id,type,title,director,cast,country,date_added,release_year,rating,listed_in,description\n81145628,\nMovie,\nNorm of the North: King Sized Adventure,\n"Richard Finn, Tim Maltby",\n"Alan Marriott, Andrew Toth,\nBrian Dobson,\nCole Howard,\nJennifer Cameron,\nJonathan Holmes,\nLee Tockar,\nLisa Durupt,\nMaya Kay,\nMichael Dobson",\n"United States,\nIndia,\nSouth Korea,\nChina",\n"September 9,\n2019",\n2019,\nTV-PG,\n90 min,\n"Children & Family Movies,\nComedies",\n"Before planning an awesome wedding for his grandfather,\na polar bear king must take back a stolen artifact from an evil archaeologist first."')]),e._v(" "),n("p",[e._v("hive建表错误问题记录\nFAILED: SemanticException [Error 10035]: Column repeated in partitioning columns\n问题原因：分区字段不能与表中其他字段重复，否则报错\n解决办法：")]),e._v(" "),n("p",[e._v("FAILED: ParseException line 6:0 cannot recognize input near 'cast' 'string' ',' in columnname or primary key or foreign key")]),e._v(" "),n("p",[e._v("spark的安装")]),e._v(" "),n("p",[e._v("版本：")]),e._v(" "),n("p",[e._v("启用hiveserver2\nnohup hiveserver2 >/dev/null 2>&1 &")]),e._v(" "),n("p",[e._v("set hive.execution.engine=spark;")]),e._v(" "),n("p",[e._v("Error: Error running query: java.lang.NoClassDefFoundError: scala/collection/Iterable (state=,code=0)")]),e._v(" "),n("p",[e._v("scala的安装\n类似java")]),e._v(" "),n("p",[e._v("select count(country) from netflix_records;")]),e._v(" "),n("p",[e._v("hdfs dfsadmin -safemode get\nhdfs dfsadmin -safemode enter\nhdfs dfsadmin -safemode leave")])])}),[],!1,null,null,null);n.default=a.exports}}]);