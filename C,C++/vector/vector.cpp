#include<vector>
#include<iostream>
#include<deque>
#include<list>
using namespace std;
int main()
{
    //创建一个空的vector
    vector<int> obv;
    //用size（）函数返回元素个数
    cout<<"obv的元素个数为："<<obv.size()<<endl;
     
    double sz[5] = {1,2,3,4,5};
    
    deque <double> obD(sz,sz + 5);
    for(unsigned int i = 0;i < obD.size();i++)
    {
        cout << obD[i] <<" ";
    }
    list <float> obL(3,5);
    
    list<float>::iterator iter = obL.begin();
    while(iter != obL.end())
    {
        cout << (*iter) <<" ";
        iter++;
    }


}