## creFile 

__creFile is node.js CLI which generate file by referring the input text file.__


### CREATE ONE TO GENERATE MANY🤞!


The core reason behind creating this CLI is, I am maintain a punchlist, a text file where I planned the functions that I need to create and the function(js files) which resides in the same directory where the file is created. I got bored after doing this repeatedly for week. After watching [Automating Tasks with Node CLIs (with Ahmad Awais)](https://www.youtube.com/watch?v=V1GkmB7T7Ps&t=952s) got inspired to automate this process using node CLI.

### Use Case
If your bored/lazy 🦥 to create tones of files, then use the CLI to automate🤖 that process.

### How to Install
1. [Install node.js](https://nodejs.org/en/)
2. > npx crefile

_I have test this in only windows to be precise win 10, one I have test with other platform i will update the doc_

### How to use
1. open cmd
2. >cd <path_of_the_intended_directory>
3. create a text file with file name that you want to generate inside "|<text_name>|". For multiple files separate each "|<text_name>|" by new line.
```
|Filename1.js| 
|Filename2.txt|
```
4. >creFile gen <text_file_name>

### Example
```
punchlist.txt

[X] queue with array |queue_arr_imp.js| 
[X] priority queue |priority_queue_imp.js|
```

### References

1.[Automating Tasks with Node CLIs (with Ahmad Awais)](https://www.youtube.com/watch?v=V1GkmB7T7Ps&t=952s)

2.[Reading files with Node.js](https://nodejs.dev/learn/reading-files-with-nodejs)

3.[fs.readdirSync](https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j)


