#include<iostream>
#include<regex>
#include<string>

using namespace std;
int main()
{
    string pattern("[^c]ei");
    pattern = "[[:alpha:]]*" + pattern + "[[:alpha:]]*";
    regex r(pattern);
    smatch results;
    string test_str;
    while(1)
    {
        cout<<"Enter a word, or q to quit."<<endl;
        cin >>test_str;
        if(test_str=="q")
        {
            break;
        }
        if(regex_match(test_str,results,r)){
            cout<<results.str()<<endl;
        }
    }
    return 0;
}