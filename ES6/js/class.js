class Instructor{
    name;
    designation = 'Student'
    intake = '43'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log('This is is feedback');
    }
}
 