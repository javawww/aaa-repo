for j in '/root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sql'
do  
        mysql -uroot -psc19900514 goldentree_prd < /root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sql
done 

