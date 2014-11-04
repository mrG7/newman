# Newman
A tool to quickly explore the history and network created by your email.
![Hello Newman](http://s2.quickmeme.com/img/2c/2cc68b7c1ba0a12bb8bc3438ecfea4d118bdefa65989dfa74825af5f85919739.jpg)
## Quick Start
Install [Vagrant](http://www.vagrantup.com/)  
Install [Virtual Box] (https://www.virtualbox.org/wiki/Downloads)  
Download [XData-VM v0.2.1] (http://goo.gl/5jCBem)  
Install XData-VM v0.2.1

    $ vagrant box add xdata-vm-[version] xdata-vm-[version].box  
    $ mkdir -p ~/vm/xdata-vm/version/  
    $ cd ~/vm/xdata-vm/version/  
    $ vagrant init xdata-vm-[version]  

Download Newman-VM  

    $ git clone https://github.com/Sotera/newman-vm  
    $ cd newman-vm  
    $ vagrant up  
    $ vagrant ssh  
    $ cd /srv/software  
    $ git clone https://github.com/Sotera/newman  
    $ tangelo restart  


In a browser goto [http://localhost:8787/ingest](http://localhost:8787/ingest)  
Enter your gmail username and password and click download  
Once download has completed, click ingest  
Once ingest has completed, goto [http://localhost:8787/](http://localhost:8787/)  

#GMail Download troubleshooting:  
Make sure that Google 2-Step authentication is turned off  
    GMail-> Account-> Security-> 2-Step Verification  
Make sure Access for less secure applications is turned on.  
    GMail-> Account-> Security-> Access for less secure apps.  

## Applied Technology
[Distributed Louvain Modularity](https://github.com/Sotera/distributed-louvain-modularity)  
[MITIE: MIT Information Extraction](https://github.com/mit-nlp/MITIE)  
[Topic Clustering](https://github.com/mitll/topic-clustering)  
[ActiveSearch](https://github.com/AutonlabCMU/ActiveSearch)  

[icons](https://www.iconfinder.com/iconsets/document-icons-2)  
