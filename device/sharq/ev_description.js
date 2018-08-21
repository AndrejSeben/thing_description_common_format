{
    "oid": "dummyelectricvehicle",
    "name": "The example description of dummy battery",
    "type": "adap:ElectricVehicle",
    "properties": [
        {
            "pid": "batterynominalcapacity",
            "monitors": "BatteryNominalCapacity",
            "read_link": {
                "href": "/device/{oid}/property/{pid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "property",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "value",
                            "schema": {
                                "type": "number"
                            }
                        }
                    ]
                }
            }
        },
        {
            "pid": "nominalevcurrent",
            "monitors": "NominalEVCurrent",
            "read_link": {
                "href": "/device/{oid}/property/{pid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "property",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "value",
                            "schema": {
                                "type": "number"
                            }
                        }
                    ]
                }
            }
        },
        {
            "pid": "energysupplysystem",
            "monitors": "EnergySupplySystem",
            "read_link": {
                "href": "/device/{oid}/property/{pid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "property",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "value",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ]
                }
            }
        },
        {
            "pid": "vehicletype",
            "monitors": "VehicleType",
            "read_link": {
                "href": "/device/{oid}/property/{pid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "property",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "value",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ]
                }
            }
        },
        {
            "pid": "maxcablecurrent",
            "monitors": "MaxCableCurrent",
            "read_link": {
                "href": "/device/{oid}/property/{pid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "property",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "value",
                            "schema": {
                                "type": "number"
                            }
                        }
                    ]
                }
            },
            "write_link": {
                  "href": "/electricvehicle/set-maxcablecurrent/{oid}",
                  "input": {
                      "type": "object",
                      "field": [
                          {
                              "name": "property",
                              "schema": {
                                  "type": "string"
                              }
                          },
                          {
                              "name": "value",
                              "schema": {
                                  "type": "number"
                              }
                          }
                      ]
                  },
                  "output": {
                      "type": "object",
                      "field": [
                          {
                              "name": "success",
                              "schema": {
                                  "type": "boolean"
                              }
                          }
                      ]
                  }
              }
        }
    ]
}
