#include <iostream>
#include <regex>
#include <string>
#include <fstream>
#include <vector>

using namespace std;
int main()
{

    string find_str = R"(    GET /qqfind / btn / tips? ldw = 522285956 HTTP / 1.1 Host: cgi.find.qq.com
    Accept : */*
    User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
    Connection: Keep-Alive
    Cache-Control: no-cache
    Accept-Encoding: gzip, deflate
    Cookie: uin=o1030270538;skey=Z9bH195Z18
    
    HTTP/1.1 302 Moved Temporarily
    Server: stgw/1.3.12.4_1.13.5
    Date: Fri, 09 Apr 2021 01:26:08 GMT
    Content-Type: text/html
    Content-Length: 169
    Connection: keep-alive
    Location: https://cgi.find.qq.com/qqfind/btn/tips?ldw=522285956
    
    <html>
    <head><title>302 Found</title></head>
    <body bgcolor=\"white\">
    <center><h1>302 Found</h1></center>
    <hr><center>stgw/1.3.12.4_1.13.5</center>
    </body>
    </html>)";
    //cout<<find_str;
    string ua_pattern("user-agent:.*");
    regex r(ua_pattern,regex::icase);
    smatch results;
    if (regex_search(find_str,results,r))
    {
        cout<< results.str()<<endl;
    }
    ofstream Outfile("regex_result.txt");
    Outfile<<results.str();
    ifstream myfile("regex_result.txt");
    ofstream outfile("out.txt");
    string temp;
    if(!myfile.is_open())
    {
        cout<<"fail to open the file!"<<endl;
    }
    while(getline(myfile,temp)) 
    {
        outfile<<temp;
        outfile<<endl;
    }
    myfile.close();
    outfile.close();
    
}