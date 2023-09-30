#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main(void) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n;
    cin>>n;
    vector <int> a(n);
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }   
    int count=1;
    for(int i=0;i<n;i++)
    {
        int p=a[i]*3;
        for(int j=i+1;j<n;j++)
        {
            if(a[j]==p)
            {
                count++;
            }
        }
    }
    cout<<count;
}