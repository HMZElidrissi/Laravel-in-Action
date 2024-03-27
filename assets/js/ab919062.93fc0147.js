"use strict";(self.webpackChunklaravel_in_action=self.webpackChunklaravel_in_action||[]).push([[5831],{62:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=n(4848),i=n(8453);const r={sidebar_position:2},a="Writing Unit Tests with PHPUnit",l={id:"Testing-and-Test-Driven-Development/Writing-Unit-Tests-with-PHPUnit",title:"Writing Unit Tests with PHPUnit",description:"Generating a Test Class",source:"@site/docs/Testing-and-Test-Driven-Development/Writing-Unit-Tests-with-PHPUnit.md",sourceDirName:"Testing-and-Test-Driven-Development",slug:"/Testing-and-Test-Driven-Development/Writing-Unit-Tests-with-PHPUnit",permalink:"/Laravel-in-Action/docs/Testing-and-Test-Driven-Development/Writing-Unit-Tests-with-PHPUnit",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/Laravel-in-Action/blob/main/docs/Testing-and-Test-Driven-Development/Writing-Unit-Tests-with-PHPUnit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Testing",permalink:"/Laravel-in-Action/docs/Testing-and-Test-Driven-Development/Introduction-to-Testing"},next:{title:"Testing HTTP Requests and Responses",permalink:"/Laravel-in-Action/docs/Testing-and-Test-Driven-Development/Testing-HTTP-Requests-and-Responses"}},c={},o=[{value:"Generating a Test Class",id:"generating-a-test-class",level:2},{value:"Writing Test Methods",id:"writing-test-methods",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Tests arguments",id:"tests-arguments",level:3},{value:"Mocking Dependencies",id:"mocking-dependencies",level:2},{value:"Best Practices for Unit Testing",id:"best-practices-for-unit-testing",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"writing-unit-tests-with-phpunit",children:"Writing Unit Tests with PHPUnit"}),"\n",(0,s.jsx)(t.h2,{id:"generating-a-test-class",children:"Generating a Test Class"}),"\n",(0,s.jsxs)(t.p,{children:["To generate a new test class, you can use the ",(0,s.jsx)(t.code,{children:"make:test"})," Artisan command. This command will create a new test class in the ",(0,s.jsx)(t.code,{children:"tests/Feature"})," directory by default. You can specify the ",(0,s.jsx)(t.code,{children:"--unit"})," option to create a unit test class in the ",(0,s.jsx)(t.code,{children:"tests/Unit"})," directory instead."]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example of how to generate a new feature test class:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"php artisan make:test ExampleTest\n"})}),"\n",(0,s.jsx)(t.p,{children:"And here's an example of how to generate a new unit test class:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"php artisan make:test ExampleTest --unit\n"})}),"\n",(0,s.jsx)(t.h2,{id:"writing-test-methods",children:"Writing Test Methods"}),"\n",(0,s.jsxs)(t.p,{children:["Within your test class, you define test methods that correspond to the units or features you want to test. Each test method should start with the word ",(0,s.jsx)(t.code,{children:"test"})," followed by a descriptive name that explains what the test is doing."]}),"\n",(0,s.jsx)(t.p,{children:"Let's take a simple example of testing a basic math utility class that performs addition and subtraction:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// app/Utils/MathUtils.php\n\nnamespace App\\Utils;\n\nclass MathUtils\n{\n    public function add($a, $b)\n    {\n        return $a + $b;\n    }\n\n    public function subtract($a, $b)\n    {\n        return $a - $b;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here's how you can write test methods for this class:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// tests/Unit/MathUtilsTest.php\n\nnamespace Tests\\Unit;\n\nuse App\\Utils\\MathUtils;\nuse Tests\\TestCase;\n\nclass MathUtilsTest extends TestCase\n{\n    public function testAdd()\n    {\n        $mathUtils = new MathUtils();\n        $result = $mathUtils->add(2, 3);\n        $this->assertEquals(5, $result);\n    }\n\n    public function testSubtract()\n    {\n        $mathUtils = new MathUtils();\n        $result = $mathUtils->subtract(5, 3);\n        $this->assertEquals(2, $result);\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,s.jsxs)(t.p,{children:["To run your tests, you can use the ",(0,s.jsx)(t.code,{children:"phpunit"})," command in the terminal. By default, PHPUnit will run all the tests in the ",(0,s.jsx)(t.code,{children:"tests"})," directory. You can also specify a specific test file or directory to run."]}),"\n",(0,s.jsxs)(t.p,{children:["Here's an example of how to run all the tests in the ",(0,s.jsx)(t.code,{children:"tests"})," directory:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit\n"})}),"\n",(0,s.jsx)(t.p,{children:"And here's an example of how to run a specific test file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit tests/Unit/MathUtilsTest.php\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Or you can use test Artisan command, which will run all the tests in the ",(0,s.jsx)(t.code,{children:"tests"})," directory. The Artisan command will also display a summary of the test results:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"php artisan test\n"})}),"\n",(0,s.jsx)(t.h3,{id:"tests-arguments",children:"Tests arguments"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--filter"}),": Filter which tests to run based on their name. (i.e., match the test name with the provided string. and it can be a regular expression.)"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --filter testAdd\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--testsuite"}),": Run tests from a specific suite."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --testsuite Feature\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--group"}),": Run tests that belong to a specific group."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --group slow\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--exclude-group"}),": Exclude tests that belong to a specific group."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --exclude-group fast\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--stop-on-failure"}),": Stop the test execution on the first failure."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --stop-on-failure\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--testdox"}),": Generate test documentation in plain text format."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --testdox\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--list-groups"}),": List available test groups."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --list-groups\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--list-suites"}),": List available test suites."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --list-suites\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--list-tests"}),": List available tests."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"vendor/bin/phpunit --list-tests\n"})}),"\n",(0,s.jsx)(t.h2,{id:"mocking-dependencies",children:"Mocking Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"Unit tests should test individual units of code in isolation, which means that they should not rely on external dependencies. If a unit depends on external resources or services, you can use mocking to create fake objects or stubs to simulate the behavior of those dependencies."}),"\n",(0,s.jsx)(t.p,{children:"In Laravel, you can use the \u2018Mockery\u2019 library, which is included by default, to create mock objects. Alternatively, you can use PHPUnit\u2019s built-in mocking features for simpler cases."}),"\n",(0,s.jsx)(t.p,{children:"Here\u2019s an example of using mocking to test a class that depends on an external service:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// app/Services/WeatherService.php\n\nclass WeatherService\n{\n    public function getTemperature($city)\n    {\n        // Call an external API to get the temperature\n        // For testing purposes, we'll mock the response\n        return 25;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// app/Utils/WeatherReporter.php\n\nclass WeatherReporter\n{\n    protected $weatherService;\n\n    public function __construct(WeatherService $weatherService)\n    {\n        $this->weatherService = $weatherService;\n    }\n\n    public function getWeatherReport($city)\n    {\n        $temperature = $this->weatherService->getTemperature($city);\n\n        if ($temperature > 20) {\n            return 'It\\'s a hot day!';\n        } else {\n            return 'It\\'s a cold day!';\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// tests/Unit/WeatherReporterTest.php\n\nuse Tests\\TestCase;\nuse App\\Services\\WeatherService;\nuse App\\Utils\\WeatherReporter;\nuse Mockery;\n\nclass WeatherReporterTest extends TestCase\n{\n    public function testGetWeatherReport()\n    {\n        $weatherService = Mockery::mock(WeatherService::class);\n        $weatherService->shouldReceive('getTemperature')->with('London')->andReturn(25);\n\n        $weatherReporter = new WeatherReporter($weatherService);\n        $result = $weatherReporter->getWeatherReport('London');\n\n        $this->assertEquals('It\\'s a hot day!', $result);\n    }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, we use Mockery to create a mock object of the ",(0,s.jsx)(t.code,{children:"WeatherService"})," class and define the behavior of the ",(0,s.jsx)(t.code,{children:"getTemperature"})," method. This allows us to test the ",(0,s.jsx)(t.code,{children:"WeatherReporter"})," class in isolation without relying on the actual ",(0,s.jsx)(t.code,{children:"WeatherService"})," implementation."]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices-for-unit-testing",children:"Best Practices for Unit Testing"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Test each method in isolation and ensure they return the correct outputs for various inputs."}),"\n",(0,s.jsx)(t.li,{children:"Name your test methods descriptively to indicate what they are testing."}),"\n",(0,s.jsxs)(t.li,{children:["Use PHPUnit assertion methods like ",(0,s.jsx)(t.code,{children:"assertEquals"}),", ",(0,s.jsx)(t.code,{children:"assertTrue"}),", ",(0,s.jsx)(t.code,{children:"assertFalse"}),", etc., to validate the expected results."]}),"\n",(0,s.jsx)(t.li,{children:"Avoid testing methods or functions that solely contain framework-specific logic (e.g., Eloquent models, controllers, etc.). Instead, focus on testing business logic and utility classes."}),"\n",(0,s.jsx)(t.li,{children:"Mock external dependencies or services to focus on the unit being tested."}),"\n",(0,s.jsx)(t.li,{children:"Always run your unit tests before deploying your application to ensure that new changes do not break existing functionality."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);