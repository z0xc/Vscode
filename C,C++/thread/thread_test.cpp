#include<iostream>
#include<thread>

using namespace std;

void proc(int &a)
{
    cout<<"the is a  child thread,the incoming parameter is:"<< a <<endl;
    cout<<"the child id display in the child thread:"<<this_thread::get_id()<<endl;
}
int main()
{
    cout<< "i am the main thread" << endl;
    int a = 9;
    thread th(proc,a);
    //cout<< "id:" << th.get_id() << endl;
   // th.join();
    return 0;
}
