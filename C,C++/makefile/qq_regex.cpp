#include<iostream>
#include<regex>
#include<string>
using namespace std;
int main()
{
    //查找不在字符c之后的字符串ei
    string pattern("[^c]ei");
    //我们需要包含pattern的整个单词
    pattern = "[[:alpha:]]*" + pattern + "[[:alpha:]]*";
    regex r(pattern);
    smatch results;
    string test_str = "receipt freind theif receive";
    if (regex_search(test_str,results,r))
    {
        cout<< results.str()<<endl;
    }
    

}