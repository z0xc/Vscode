#include<iostream>
#include<thread>
using namespace std;
void hello()
{
    cout << "hello concurrency World!" << endl;
}
int main()
{
    thread t(hello);
    t.join();
}