window.BENCHMARK_DATA = {
  "lastUpdate": 1669757858680,
  "repoUrl": "https://github.com/lafrenierejm/ripsecrets",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm",
            "email": "joseph@lafreniere.xyz"
          },
          "committer": {
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm",
            "email": "joseph@lafreniere.xyz"
          },
          "id": "58379a07eaba18e363faa677c882fb451c418d6a",
          "message": "Run criterion with bench-compatible output",
          "timestamp": "2022-09-19T04:44:52Z",
          "url": "https://github.com/lafrenierejm/ripsecrets/commit/58379a07eaba18e363faa677c882fb451c418d6a"
        },
        "date": 1663563375246,
        "tool": "cargo",
        "benches": [
          {
            "name": "Find secrets in getsentry/sentry/find_secrets function",
            "value": 8639225428,
            "range": "± 1451377931",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm",
            "email": "joseph@lafreniere.xyz"
          },
          "committer": {
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm",
            "email": "joseph@lafreniere.xyz"
          },
          "id": "24f2b6b131e325513c33d23244100541212ab874",
          "message": "Delete Markdown files to avoid Jekyll errors",
          "timestamp": "2022-09-19T05:22:40Z",
          "url": "https://github.com/lafrenierejm/ripsecrets/commit/24f2b6b131e325513c33d23244100541212ab874"
        },
        "date": 1663565459330,
        "tool": "cargo",
        "benches": [
          {
            "name": "Find secrets in getsentry/sentry/find_secrets function",
            "value": 10126913113,
            "range": "± 1635728423",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joseph@lafreniere.xyz",
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm"
          },
          "committer": {
            "email": "joseph@lafreniere.xyz",
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm"
          },
          "distinct": true,
          "id": "c18ca76357bf40c58cad3ad52829f8baac2d3fc8",
          "message": "Create a GitHub Actions workflow job for benchmarking",
          "timestamp": "2022-09-19T19:17:14-05:00",
          "tree_id": "3277761c2e7566aa933829005a557081947a84a3",
          "url": "https://github.com/lafrenierejm/ripsecrets/commit/c18ca76357bf40c58cad3ad52829f8baac2d3fc8"
        },
        "date": 1663633464126,
        "tool": "cargo",
        "benches": [
          {
            "name": "Find secrets in getsentry/sentry/find_secrets function",
            "value": 7293060731,
            "range": "± 718965945",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joseph@lafreniere.xyz",
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm"
          },
          "committer": {
            "email": "joseph@lafreniere.xyz",
            "name": "Joseph LaFreniere",
            "username": "lafrenierejm"
          },
          "distinct": true,
          "id": "b4ab0dc5bd52d2238707f859810aec2f15eca559",
          "message": "Define Actions workflow to build and load Docker image",
          "timestamp": "2022-11-29T15:27:40-06:00",
          "tree_id": "17864852e648ef0e8f3c28a204f4508fb3174b99",
          "url": "https://github.com/lafrenierejm/ripsecrets/commit/b4ab0dc5bd52d2238707f859810aec2f15eca559"
        },
        "date": 1669757848446,
        "tool": "cargo",
        "benches": [
          {
            "name": "Find secrets in getsentry/sentry/find_secrets function",
            "value": 7612351239,
            "range": "± 442403783",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joseph@lafreniere.xyz",
            "name": "Joseph M LaFreniere",
            "username": "lafrenierejm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30a3c80f4ecde56780e6e50216332601979d3775",
          "message": "Add pre-commit checks (#45)\n\n* Configure pre-commit hooks as part of Nix shell\r\n\r\nThe pre-commit hooks added are\r\n- nixfmt\r\n- rustfmt\r\n- cargo check\r\n- clippy\r\n\r\n* Autoformat Nix files using `nixfmt`\r\n\r\n* Run pre-commit via Nix as part of CI workflow\r\n\r\n* Gitignore `/result`\r\n\r\n* Autoformat Rust source files using `rustfmt`\r\n\r\n* Skip build as part of `nix flake check`",
          "timestamp": "2022-11-28T20:33:50-08:00",
          "tree_id": "1103fbb86d276a351bc527246f94194ebae2db2d",
          "url": "https://github.com/lafrenierejm/ripsecrets/commit/30a3c80f4ecde56780e6e50216332601979d3775"
        },
        "date": 1669757857574,
        "tool": "cargo",
        "benches": [
          {
            "name": "Find secrets in getsentry/sentry/find_secrets function",
            "value": 10388274681,
            "range": "± 842500625",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}