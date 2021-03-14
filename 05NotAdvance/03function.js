var sayhello = function()
{
    console.log("function variable");
    console.log("this is type one");
}

sayhello();


function sayhelloo()
{
    console.log("regular function");
    console.log("this is type two");
}

sayhelloo();


// () => ()

// Self-Executing Anonymous Function

(  function ()
  {
      console.log("Self Executing Function")
      console.log("this is type three")
  }
  
) ();