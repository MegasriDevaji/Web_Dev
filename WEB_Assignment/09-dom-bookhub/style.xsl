<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>BookHub System</title>
                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
                <div class="container">
                    <h1>BookHub Management System</h1>

                    <div class="card">
                        <h2>User Details</h2>
                        <p>
                            <strong>Name:</strong>
                            <xsl:value-of select="BookHubSystem/UserRecord/Name"/>
                        </p>
                        <p>
                            <strong>Preferred Category:</strong>
                            <xsl:value-of select="BookHubSystem/UserRecord/PreferredCategory"/>
                        </p>
                    </div>

                    <div class="card">
                        <h2>Available Books</h2>
                        <ul>
                            <xsl:for-each select="BookHubSystem/BookRecords/BookRecord">
                                <li>
                                    <strong><xsl:value-of select="Title"/></strong>
                                    <span> by <xsl:value-of select="Author"/></span>
                                    <span> - <xsl:value-of select="Category"/></span>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </div>

                    <div class="card">
                        <h2>Order Summary</h2>
                        <p>
                            <strong>Order ID:</strong>
                            <xsl:value-of select="BookHubSystem/OrderRecord/OrderId"/>
                        </p>
                        <p>
                            <strong>Selected Book:</strong>
                            <xsl:value-of select="BookHubSystem/OrderRecord/SelectedBook"/>
                        </p>
                        <p>
                            <strong>Quantity:</strong>
                            <xsl:value-of select="BookHubSystem/OrderRecord/Quantity"/>
                        </p>
                        <p>
                            <strong>Price:</strong>
                            Rs.
                            <xsl:value-of select="BookHubSystem/OrderRecord/Price"/>
                        </p>
                    </div>

                    <div class="card">
                        <h2>BookHub Steps</h2>
                        <ol>
                            <xsl:for-each select="BookHubSystem/BookHubSteps/StepRecord">
                                <li><xsl:value-of select="Instruction"/></li>
                            </xsl:for-each>
                        </ol>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
