#include<iostream>
#include<thread>
#include<mutex>
using namespace std;
mutex m;
void proc1(int a)
{
    m.lock();
    cout << "proc1 function is rewriting a：" <<endl;
    cout << "Before the modification,the value of a is:" << a <<endl;
    cout << "After modification,the a value is:" << a + 2 <<endl;
    m.unlock();
}
void proc2(int a)
{
    m.lock();
    cout << "proc2 is rewriting a:" << endl;
    cout << "The a value before the modification is:" << a << endl;
    cout << "After modification, the a value is:" << a + 1 <<endl;
    m.unlock();
}
int main()
{
    int a = 0;
    thread t1(proc2,a);
    thread t2(proc1,a);
    t1.join();
    t2.join();
}