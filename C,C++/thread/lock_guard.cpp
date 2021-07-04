#include<iostream>
#include<mutex>
#include<thread>
using namespace std;
mutex m;
void proc1(int a)
{
    lock_guard<mutex> g1(m); 
    cout<<""<<endl;
    cout<<""<<a<<endl;
    cout<<""<<a+2<<endl;
}
void proc2(int a)
{
    {
       lock_guard<mutex> g2(m); 
       cout<<""<<endl;
       cout<<""<<a<<endl;
       cout<<""<<a+1<<endl;
    }
    cout<<"out 3"<<endl;
    cout<<"out 4"<<endl;
    cout<<"out 5"<<endl;
}
int main()
{
    int a=0;
    thread t1(proc2,a);
    thread t2(proc1,a);
    t1.join();
    t2.join();
}