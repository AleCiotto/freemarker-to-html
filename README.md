# freemarker-to-html
A nodejs script which transforms freemarker template stored in xml file into an html file

## XML template example
```
<EmailTemplate>
	<Template>
		<Head>
			<ReplyTo>
				${Model.Head.ReplyTo}
			</ReplyTo>
			<From>
				noreply@example.com
			</From>
			<To>
				${Model.Head.To}
			</To>
			<Cc>
				${Model.Head.Cc}
			</Cc>
			<Bcc>
			</Bcc>
			<Subject>
				Hello World!
			</Subject>
		</Head>
		<Body contentTransferEncoding="base64" contentType="text/html">
			<![CDATA[
			<!DOCTYPE HTML>
			<html>
			<head>
			<meta http-equiv="content-type" content="text/html; charset=UTF-8">
			<meta http-equiv="keywords" content="">
			<title>Newsletter Subscription</title>
			<style type="text/css">
			
			/* Basics */
			body {
			margin: 0 !important;
			background-color: white;
			font-size: 14px;
			color: #000;
			letter-spacing: 0.025rem;
			line-height: 1.5rem;
			}
			</style>
			</head>
			<body>
                <h1>Hello World!</h1>
                <p>This is a p tag</p>
                <a href="#">This is a link</a>
			</body>
			</html>
			]]>
		</Body>
	</Template>
</EmailTemplate>

```

## Model example
```
{
    "Model": {
        "Head": {
            "From": "noreply@example.com",
            "To": "user_email@example.com",
            "Cc": {
                "__cdata": "Recipient 2<recipient2@example.com>,Recipient 3<recipient3@example.com>"
            },
            "Bcc": {
                "__cdata": "Recipient 4<recipient2@example.com>,Recipient 5<recipient3@example.com>"
            },
            "Subject": "Hello World",
            "ReplyTo": "reply_example@example.com",
            "InReplyTo": "2d8a67d9-7e18-47b6-91d6-005d2c217afc",
            "References": "029584095849085, 4329345103248"
        },
        "Customer": {
            "NameAndPhone": {
                "Gender": 2,
                "Title": "0003",
                "FirstName1": "TAN",
                "FirstName2": "CHAN",
                "LastName1": "YAN",
                "LastName2": "CHAM",
                "PhoneNumber": 0,
                "MobilePhoneNumber": 11111111177
            },
            "BirthDate": {
                "Year": 1970,
                "Month": 1,
                "Day": 1
            },
            "CustomerNumber": 3325256,
            "AccountToken": {
                "Token": "some_token",
                "Url": "http://example.com",
                "Language": "en"
            },
            "Password": "Some Password",
            "AccountCreationDate": "2012-11-13T09:30:47Z",
            "AccountUpdateDate": "2012-11-13T09:30:47Z",
            "Email": "example@gmail.com",
            "WebsiteCountry": "US",
            "PreferredLanguage": "en",
            "PrivacyPolicy": "2012-11-13T09:30:47Z",
            "ContactByBrand": false,
            "NewsletterAccount": false,
            "Addresses": {
                "Address": {
                    "NameAndPhone": {
                        "FirstName1": "CMS6",
                        "FirstName2": "CMS7",
                        "LastName2": "CMS8",
                        "PhoneNumber": 0,
                        "MobilePhoneNumber": 11111111177
                    },
                    "Default": true,
                    "Label": "NY Address",
                    "DeliveryBoutiqueCode": 54,
                    "Address2": 234,
                    "Address5": "34 ADDRESS  USA",
                    "Address6": "Address details",
                    "Address7": "NEW YORK",
                    "Address9": "NY",
                    "ZipCode": 2434,
                    "State": "NY",
                    "Country": "US"
                }
            },
        },
    }
}
```