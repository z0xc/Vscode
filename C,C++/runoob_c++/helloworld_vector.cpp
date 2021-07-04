#include<iostream>
#include<vector>
#include<string>

using namespace std;
int main(){
    vector<string> msg{"hello","C++","World","from","vs code"};
    int a;
    for(const string& word:msg){
        cout<<word<<"";
    }
    cout<<endl; 
    cin>>a; 
    cout<<a;
}