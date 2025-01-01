# Web Address

Web addresses and IP addresses are fundamental for communication on the internet. A web address (also known as a URL) is the identifier that allows users to access websites easily and intuitively. For example, a web address like "www.example.com" is translated by servers into an IP address, which is a numerical sequence that uniquely identifies a device on the network.

---

**IPv4**

IPv4 (Internet Protocol version 4) is the traditional system used for addressing devices on the internet. It uses a 32-bit numerical format, which allows for about 4.3 billion unique addresses. An example of an IPv4 address would be "192.168.0.1". While it has been sufficient for many years, the rapid growth of the internet and the increase in connected devices have led to a shortage of available addresses.

**IPv6**

To resolve the limitations of IPv4, IPv6 was developed. It uses 128 bits for addresses, allowing for an almost unlimited number of unique addresses. This ensures that the increasing number of devices connected to the internet can be accommodated without concerns about address shortages. An example of an IPv6 address is "2001:0db8:85a3:0000:0000:8a2e:0370:7334".

<img src="img/ip.jpeg" alt="HTTP Request and Response" width="600" height="400"/>

---

## DNS

The Domain Name System (DNS) is often referred to as the "phonebook of the internet." It translates human-readable domain names like www.example.com into machine-readable IP addresses, such as 192.0.2.1. This translation allows users to access websites and online services without memorizing complex numerical addresses.

### How Does DNS Work?

- **Query Process**: When you type a URL into your browser, your device sends a DNS query to resolve the domain name into an IP address.
- **Resolvers**: DNS resolvers (usually provided by your internet service provider or a third party like Google DNS) handle the query.
- **Servers**: The query may pass through multiple DNS servers, including:
    - **Root Servers**: Direct the query to the appropriate Top-Level Domain (TLD) server (e.g., .com, .org).
    - **TLD Servers**: Point to the authoritative server for the specific domain.
    - **Authoritative Servers**: Provide the final answer with the correct IP address.

### Key Benefits of DNS:

- **User-Friendly**: Simplifies internet navigation by allowing the use of names instead of numerical addresses.
- **Scalability**: Handles billions of queries daily, supporting the vast scale of the internet.
- **Decentralization**: The system is distributed, making it more reliable and fault-tolerant.

### Common Terms in DNS:

- **DNS Record Types**: Specify information about a domain. Examples include:
    - **A Record**: Maps a domain to an IPv4 address.
    - **AAAA Record**: Maps a domain to an IPv6 address.
    - **CNAME Record**: Points one domain to another (aliasing).
    - **MX Record**: Directs email to mail servers.
    - **TTL (Time to Live)**: Determines how long a DNS record is cached by servers.

*DNS is a cornerstone of internet functionality, ensuring seamless communication between users and web resources.*

---

## ICANN: The Organization Behind Domain Names

The **Internet Corporation for Assigned Names and Numbers (ICANN)** is a non-profit organization that coordinates the global domain name system (DNS). ICANN plays a critical role in ensuring the internet is accessible and functional by overseeing the management of domain names and IP addresses. Their responsibilities include:

- **Managing Domain Name System (DNS)**: ICANN ensures that domain names are unique and properly assigned, preventing conflicts in the address space.
- **Accrediting Registrars**: ICANN accredits domain name registrars, which are responsible for selling and managing domain names.
- **Developing Policies**: ICANN works on creating policies that keep the DNS secure, stable, and interoperable.

Without ICANN, it would be impossible to maintain the vast array of unique domain names required for the internet to function smoothly, allowing millions of websites to exist without overlap.

---

### Learn more with these resources

- [Web Addresses](https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/)
- [DNS](https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/)
- [ICANN Official Website](https://www.icann.org/)
