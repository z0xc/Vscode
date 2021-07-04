#include<iostream>
#include<thread>

using namespace std;

void hello(){
    std::cout << "hello concurrent world" << endl;
}

int main(){
    std::thread exam(hello);
    exam.join();
}
