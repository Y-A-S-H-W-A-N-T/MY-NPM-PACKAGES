
# alerts-react

'alerts-react' is a React.js package for custom alerts. You can customize your alerts according to your likings. Each components color can be managed by the user.

## Installation

```sh
npm i alerts-react
```
## Usage

```sh
import { CustomAlert } from  'alerts-react'
```
```
function  App() {
	const  Alert  = ()=>{
		CustomAlert({
				title: 'My Alert'
				description: 'This i a custom alert'
				onConfirm: () => { console.log("Clicked Confirm") }
				onCancel: () => { console.log("Clicked Cancel") }
				showCancelButton: true
				type: 'error'
				confirmButtonTitle: 'OK'
				cancelButtonTitle: 'NO'
				alertBoxColor: 'white'
				titleColor: 'black'
				descriptionColor: 'blue'
				confirmButtonBgColor: 'green'
				cancelButtonBgColor: 'red'
				cancelButtonColor: 'white'
				confirmButtonColor: 'white'
				BgColor: 'gray'
			})
	}
	
	return (
		<div>
			<h1  onClick={Alert}>Fire Alert</h1>
		</div>
	);
}

export  default  App;
```
## Properties and its types
	1. title : String
	2. description : String
	3. onConfirm : function
	4. onCancel : function
	5. showCancelButton : Boolean
	6. type : String   ('error','warning','success','notification','note','information')
	7. confirmButtonTitle : String
	8. cancelButtonTitle : String
	9. alertBoxColor : String
	10. titleColor : String
	11. descriptionColor : String
	12. confirmButtonBgColor : String
	13. cancelButtonBgColor : String
	14. cancelButtonColor : String
	15. confirmButtonColor : String
	16. BgColor : String
## Note
Each value is set to default, the alert will work even if no parameters are passed.
Minimal code is enough for a simple alert.
```
CustomAlert({
	title: 'Welcome',
	description: 'you are logged in'
	})
```
## License
Licensed under MIT