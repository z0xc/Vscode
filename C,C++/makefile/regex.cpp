#include<iostream>
#include<regex>
#include<string>
using namespace std;
int main()
{
    //查找不在字符c之后的字符串ei
    string pattern("[^c]ei");
    string ua_pattern;
    //我们需要包含pattern的整个单词
    pattern = "[[:alpha:]]*" + pattern + "[[:alpha:]]*";
    // ua_pattern = "^(\S+) (\S+) (\S+) \[([\w:/]+\s[+\-]\d{4})\] "(\S+)\s?(\S+)?\s?(\S+)?" (\d{3}|-) (\d+|-)\s?"?([^"]*)"?\s?"?([^"]*)?"?\s?"(\d.\d.\d.\d|-)"$";
    cout<<pattern<<endl;
    regex r(pattern);
    smatch results;
    string test_str = "receipt freind theif receive";
    if (regex_search(test_str,results,r))
    {
        cout<< results.str()<<endl;
    }
}